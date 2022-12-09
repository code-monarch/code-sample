import { IButtonClasses } from "../components/inputs/button";

export default <IButtonClasses>{
  base: "flex justify-center items-center space-x-[10px] py-2 px-4 whitespace-nowrap border rounded-md shadow-sm text-sm font-[500] focus:outline-none focus:ring-2 focus:ring-offset-1 select-none cursor-pointer motion-safe:transition-colors disabled:cursor-not-allowed disabled:!shadow-none",
  fullWidth: "w-full",
  size: {
    xs: "py-2 px-4 text-sm",
    sm: "py-2 px-6 text-md",
    md: "py-3 px-8 text-md",
    lg: "py-3 px-10 text-lg",
    xl: "py-3 px-12 text-xl",
    "2xl": "py-[20px] px-[40px] text-2xl",
  },
  variant: {
    primary:
      "bg-[#5D51C6] text-[#F8EEE8] hover:bg-semBlue600 disabled:bg-[rgba(235,_235,_242,_1)] text-white disabled:text-[rgba(142,_138,_181,_1)] border-transparent focus:ring-[#F8EEE8]",
    secondary:
      "bg-[#EBEBF2] text-[#8E8AB5] hover:bg-secondary50 focus:ring-secondaryText disabled:bg-gray-100",
    transparent:
      "bg-transparent text-white border-[1px] border-secondaryText focus:ring-secondaryText hover:bg-white hover:text-semPrimary disabled:bg-gray-100",
  },
};
