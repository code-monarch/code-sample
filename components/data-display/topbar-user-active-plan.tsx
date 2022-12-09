import { joinClasses } from '@design-system/utils/join-classes';
import React from 'react'

export interface IUserActivePlan {
  activePlan: string;
  classstyle?: string;
}

const TopbarUserActivePlan = ({ activePlan, classstyle }: IUserActivePlan) => {
  return (
    <div
      className={joinClasses(
        classstyle,
        "uppercase bg-[#F2E1D8] w-[152px] h-[50px] text-semPrimary text-[18px] font-serif font-[600] flex justify-center items-center rounded-[4px] shadow-sm"
      )}
    >
      {activePlan}
    </div>
  );
};

export default TopbarUserActivePlan