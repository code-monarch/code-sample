import React from 'react'
import { joinClasses } from '@design-system/utils/join-classes';

const style = {
  th: `!text-semBlack text-left text-sm font-[500] font-serif opacity-60`,
};

const ApiTransacLogsThead = () => {
  return (
    <thead className='bg-gray-50'>
      <tr>
        <th
          scope='col'
          className={joinClasses(
            `${style.th}`,
            "py-3.5 pl-4 pr-[48px] sm:pl-6 lg:pl-8"
          )}
        >
          Date
        </th>
        <th scope='col' className={joinClasses(`${style.th}`, "px-3 py-3.5")}>
          Call service
        </th>
        <th
          scope='col'
          className={joinClasses(`${style.th}`, "pr-3 py-3.5 pl-[88px]")}
        >
          Status
        </th>
      </tr>
    </thead>
  );
}

export default ApiTransacLogsThead