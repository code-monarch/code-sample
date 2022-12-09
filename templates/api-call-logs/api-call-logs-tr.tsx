import React from "react";
import { ICallLogsResData } from "@app/services/user/call-logs.api-slice";
import StatusIndicator from "@design-system/components/data-display/table-status-indicator";
import { convertDate } from "@design-system/utils/convertDate";
import { joinClasses } from "@design-system/utils/join-classes";
import DisplayFeatures from "@design-system/components/data-display/display-features";

const style = {
  tr: `whitespace-nowrap text-base font-serif text-gray-500`,
};

interface IProps {
  isLoading: boolean;
  callLog: {
    userId: string;
    callId: string;
    statusCode: number;
    status: "success" | "pending" | "cancelled" | "failed";
    createdOn: number;
    service: string;
  };
}

const ApiCallLogsTr = (props: IProps) => {
  const { createdOn, service, status } = props.callLog;
  return (
    <tr>
      <td className={joinClasses(style.tr, "px-3 py-4 space-x-[8px]")}>
        {convertDate(createdOn)}
      </td>
      <td className={joinClasses(style.tr, "pl-4 pr-3 py-4")}>{service}</td>
      <td className={joinClasses(style.tr)}>
        <DisplayFeatures
          isLoading={props.isLoading ? true : false}
          classstyles={joinClasses(
            props.isLoading && "min-h-[3rem] min-w-[50px]",
            "flex items-center !space-x-[10px] pr-3 pl-[88px] py-4"
          )}
        >
          <StatusIndicator status={`${status}`} /> &nbsp;&nbsp;
          {status}
        </DisplayFeatures>
      </td>
    </tr>
  );
};

export default ApiCallLogsTr;
