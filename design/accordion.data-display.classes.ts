import { IAccordionClasses } from "../components/data-display/accordion";

export default <IAccordionClasses>{
  base: "space-y-[10px]",
  accordionItem:
    "w-[696px] flex flex-col focus-within:ring focus-within:ring-secondaryText focus-within:ring-opacity-75 focus:outline-none border-[1px] border-gray-300 rounded-[8px] transition-all duration-700 ease-in-out",
  accordionHeader: "w-full",
  accordionTrigger:
    "group inline-flex w-full items-start justify-between bg-dashboardBg px-[24px] py-[16px] text-left radix-state-open:rounded-t-lg radix-state-closed:rounded-lg radix-state-open:bg-white focus:outline-none",
  accordionArrow:
    "ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out group-radix-state-open:rotate-180 group-radix-state-open:duration-300",
  accordionContent:
    "pt-[10px] w-full rounded-b-lg bg-white px-[24px] pb-[24px]",
};
