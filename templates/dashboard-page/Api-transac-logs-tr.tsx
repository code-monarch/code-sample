import React from "react";
import StatusIndicator from "@design-system/components/data-display/table-status-indicator";
import { joinClasses } from "@design-system/utils/join-classes";
import { IDashboardData } from "@app/services/user/dashboard-data.api-slice";
import { convertDate } from "@design-system/utils/convertDate";

const style = {
  td: `whitespace-nowrap text-base font-serif text-gray-500`,
};

interface IProps {
  transaction: IDashboardData["data"]["callLogs"][0];
}

const ApiTransacLogsTr = (props: IProps) => {
  const {
    transaction: { createdOn, service, status },
  } = props;
  return (
    <tr>
      <td
        className={joinClasses(
          `${style.td}`,
          "py-4 pl-4 pr-3 sm:pl-6 lg:pl-8 space-x-[8px]"
        )}
      >
        {convertDate(createdOn)}
      </td>
      <td className={joinClasses(`${style.td}`, "px-3 py-4 space-x-[8px]")}>
        {service}
      </td>
      <td
        className={joinClasses(
          `${style.td}`,
          "flex items-center !space-x-[8px] pr-3 pl-[88px] py-4"
        )}
      >
        <StatusIndicator status={status} /> &nbsp; &nbsp;
        {status}
      </td>
    </tr>
  );
};

export default ApiTransacLogsTr;
