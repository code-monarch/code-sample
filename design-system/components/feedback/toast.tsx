import { toast, Slide } from "react-toastify";

export const toastError = (errorMessage: string) => {
  return toast.error(errorMessage, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    toastId: "error",
    transition: Slide,
  });
};

export const toastSuccess = (message: string) => {
  return toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    toastId: "success",
    transition: Slide,
  });
};

export const toastWarning = (message: string) => {
  return toast.warning(message, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    toastId: "warning",
    transition: Slide,
  });
};
export const toastLoading = (message: string) => {
  return toast.loading(message, {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
    toastId: "loading",
    transition: Slide,
  });
};
