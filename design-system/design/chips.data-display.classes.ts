import { IChipsClasses } from "../components/data-display/chips";

export default <IChipsClasses>{
  base: "flex justify-center align-center space-x-[10px] py-2 px-[40px] border rounded-md shadow-sm text-sm text-white font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none motion-safe:transition-colors",
  size: {
    xs: "py-2 px-4 text-xs",
    sm: "py-2 px-6 text-sm",
    md: "py-3 px-8 text-md",
    lg: "py-3 px-10 text-lg",
    xl: "py-3 px-12 text-xl",
    "2xl": "py-3 px-16 text-2xl",
  },
  variant: {
    white: "bg-white text-[#000]",
    red: "bg-red-500",
    green: "bg-[#22B678]",
    blue: "bg-blue-500",
    black: "bg-[#000]",
    gray: "bg-[#F5F5F7]",
    gold: "bg-[#F2E1D8] !text-semPrimary"
  },
};
