interface ISessionProps {
  key: string;
  value?: string;
}

/**
 * 
 * Sets Item in local storage
 */
const setItem = ({ key, value }: ISessionProps) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value!);
  }
};

/**
 * 
 * Retrieve Itemk from Local storage
 */
const getItem = ({ key }: ISessionProps) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
};

/**
 * Removes a particular key value from store
 */
const removeItem = ({ key }: ISessionProps) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

/**
 * Clears all Local storage Keys and values
 */
const clearStore = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

const LocalStore = { setItem, getItem, removeItem, clearStore };

// Function that sets session token after Login in Local Storage
export const setSessionToken = (value: string) => {
  const key = `${process.env.NEXT_PUBLIC_SESSION_ID}`;
  LocalStore.setItem({ key, value });
};

// Function that gets session token from local storage
export const getSessionToken = () => {
  const key = `${process.env.NEXT_PUBLIC_SESSION_ID}`;
  return LocalStore.getItem({ key });
};

console.log("Gotten session token: ", getSessionToken());

export default LocalStore;

// class LocalStore {
//   setItem({
//     key = `${process.env.NEXT_PUBLIC_SESSION_ID}`,
//     value,
//   }: ISessionProps) {
//     if (typeof window !== "undefined") {
//       localStorage.setItem(key, value!);
//     } else {
//       throw new Error("Cannot set Item");
//     }
//   }
//   getItem({ key = `${process.env.NEXT_PUBLIC_SESSION_ID}` }: ISessionProps) {
//     if (typeof window !== "undefined") {
//       localStorage.getItem(key);
//     } else {
//       throw new Error("Store not supported!");
//     }
//   }

//   removeItem = ({ key }: ISessionProps) => {
//     if (typeof window !== "undefined") {
//       localStorage.removeItem(key);
//     }
//   };

//   clearStore = () => {
//     if (typeof window !== "undefined") {
//       localStorage.clear();
//     }
//   };
// }
