import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "@app/features/auth-slice";
import type { RootState } from "@/app/store";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { getSessionToken } from "@helpers/session-manager";

// Create a new mutex
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: "https://caasbackend.herokuapp.com/api/",
  // credentials: "include",
  credentials: "same-origin",
  mode: "cors",
  // headers: {'content-type': 'application/json'},
  prepareHeaders: (headers, { getState }) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json; charset=UTF-8");
    const token = getSessionToken();

    if (token) {
      // headers.set("authorization", `Bearer ${token}`);
      headers.set("x-access-token", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result?.error?.status === 403) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        console.log("sending refresh token");
        // send refresh token to get new access token
        const refreshResult = await baseQuery(
          "/auth/refresh",
          api,
          extraOptions
        );
        console.log(refreshResult);
        if (refreshResult.data) {
          const appState = api.getState() as RootState;
          const user = appState.auth.user;
          const accessToken = refreshResult.data;
          // store the new token
          api.dispatch(setCredentials({ user, accessToken }));
          // retry the original query with new access token
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logOut());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

// All we've done so far is good, but creating a base apiSlice for our entire app is even better. Keeps our ApiSlices modular.

export const apiSlice = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  // A root tagTypes field in the API slice object, declaring an array of string tag names for data types such as 'dasktopData'
  // tagTypes: ["dashboardData"],
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
