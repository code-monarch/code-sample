import { IDisplayFeaturesClasses } from "../components/data-display/display-features";

export default <IDisplayFeaturesClasses>{
  base: "w-full h-full block",
  isLoading:
    "bg-[rgb(241_245_249)] relative w-full h-full rounded-[4px] overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-red-500 after:content-none after:animate-loading",
}; 

