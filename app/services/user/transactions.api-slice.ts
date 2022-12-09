import { apiSlice } from "@/app/api/apiSlice";

export interface ITransactionResData {
  data: [
    {
      amount: number;
      createdOn: string;
      credits: number;
      reference: string;
      status: "success" | "pending" | "cancelled" | "failed";
      transactionId: string;
      type: string;
    }
  ];
}

export const transactionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<ITransactionResData, void>({
      query: () => ({
        url: "user/transactions",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionsApiSlice;
