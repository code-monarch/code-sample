import React from 'react'
import { joinClasses } from '@design-system/utils/join-classes';

const style = {
  th: `whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60`,
};

const TransactionsThead = () => {
  return (
    <tr>
      <th
        scope='col'
        className={joinClasses(
          style.th,
          "py-3.5 pl-4 pr-[48px] sm:pl-6 lg:pl-8"
        )}
      >
        Reference ID
      </th>
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
        Type
      </th>
      <th
        scope='col'
        className={joinClasses(style.th, "py-3.5 pl-[88px] pr-[60px]")}
      >
        Credits
      </th>
      <th scope='col' className={joinClasses(style.th, "py-3.5 pl-[90px]")}>
        Amount
      </th>
      <th
        scope='col'
        className={joinClasses(style.th, "pr-3 py-3.5 pl-[88px]")}
      >
        Status
      </th>
      <th
        scope='col'
        className={joinClasses(style.th, "pr-[30px] py-3.5 pl-[60px]")}
      >
        Action
      </th>
    </tr>
  );
}

export default TransactionsThead