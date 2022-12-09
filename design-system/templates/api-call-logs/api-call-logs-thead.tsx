import { joinClasses } from '@design-system/utils/join-classes';
import React from 'react'

const style = {
  th: `whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60`,
};

const ApiCallLogsThead = () => {
  return (
    <thead className='bg-gray-50'>
      <tr>
        <th
          scope='col'
          className={joinClasses(style.th, "py-3.5 pr-[48px] pl-3")}
        >
          Date
        </th>
        <th
          scope='col'
          className={joinClasses(style.th, "py-3.5 pl-4 pr-[48px]")}
        >
          Call Services
        </th>
        <th
          scope='col'
          className={joinClasses(style.th, "pr-3 py-3.5 pl-[88px]")}
        >
          Status
        </th>
      </tr>
    </thead>
  );
}

export default ApiCallLogsThead