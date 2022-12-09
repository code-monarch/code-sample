import * as React from "react";


export interface IPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function GrayInfoPanel(props: IPanelProps) {
  return (
    <div
      {...props}
      className='bg-[#F9F8FB] w-[564px] flex flex-col space-y-[20px] p-[24px] pb-[40px] rounded-[8px] font-serif'
    >
      {props.children}
    </div>
  );
}
