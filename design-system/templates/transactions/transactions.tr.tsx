import React from "react";
import StatusIndicator from "@design-system/components/data-display/table-status-indicator";
import { joinClasses } from "@design-system/utils/join-classes";
import DisplayFeatures from "@design-system/components/data-display/display-features";
import { ITransactionResData } from "@app/services/user/transactions.api-slice";
import { convertDate } from "@design-system/utils/convertDate";
import { convertToBritishNumber } from "@design-system/utils/convertToBritishNumber";

const style = {
  td: `whitespace-nowrap text-base font-serif text-gray-500`,
};

interface IProps {
  isLoading: boolean;
  transac: ITransactionResData["data"][0];
}

const TransactionsTr = (props: IProps) => {
  const {
    transac: { reference, createdOn, type, credits, amount, status },
  } = props;
  return (
    <tr>
      {/* Reference */}
      <td
        className={joinClasses(
          style.td,
          "sm:pl-6 lg:pl-8 py-4 pl-4 pr-3 uppercase"
        )}
      >
        <DisplayFeatures
          isLoading={props.isLoading ? true : false}
          classstyles={joinClasses(
            props.isLoading && "min-h-[3rem] min-w-[50px]"
          )}
        >
          {reference}
        </DisplayFeatures>
      </td>
      {/* Reference End */}

      {/* CreatedOn */}
      <td className={joinClasses(style.td, "px-3 py-4")}>
        <DisplayFeatures
          isLoading={props.isLoading ? true : false}
          classstyles={joinClasses(
            props.isLoading && "min-h-[3rem] min-w-[50px]"
          )}
        >
          {convertDate(createdOn)}
        </DisplayFeatures>
      </td>
      {/* CreatedOn End */}

      {/* Type */}
      <td className={joinClasses(style.td, "pl-4 pr-3 py-4")}>
        <DisplayFeatures
          isLoading={props.isLoading ? true : false}
          classstyles={joinClasses(
            props.isLoading && "min-h-[3rem] min-w-[50px]"
          )}
        >
          {type}
        </DisplayFeatures>
      </td>
      {/* Type End */}

      {/* Credits */}
      <td className={joinClasses(style.td, "pl-[90px] pr-[34px] py-4")}>
        <DisplayFeatures
          isLoading={props.isLoading ? true : false}
          classstyles={joinClasses(
            props.isLoading && "min-h-[3rem] min-w-[50px]"
          )}
        >
          {convertToBritishNumber(credits)}
        </DisplayFeatures>
      </td>
      {/* Credits End */}

      {/* Amount */}
      <td className={joinClasses(style.td, "pl-[88px] pr-3 py-4")}>
        {convertToBritishNumber(amount)}
      </td>
      {/* Amount End */}

      {/* Status */}
      <td className={joinClasses(style.td, "pr-3 pl-[88px] py-4")}>
        <DisplayFeatures
          isLoading={props.isLoading ? true : false}
          classstyles={joinClasses(
            props.isLoading && "min-h-[3rem] min-w-[50px]",
            "flex items-center !space-x-[10px]"
          )}
        >
          <StatusIndicator status={`${status}`} /> &nbsp;&nbsp;
          {status}
        </DisplayFeatures>
      </td>
      {/* Status End */}

      {/* Actions */}
      <td className={joinClasses(style.td, "pr-[30px] pl-[75px] py-4")}>
        <DisplayFeatures
          isLoading={props.isLoading ? true : false}
          classstyles={joinClasses(
            props.isLoading && "min-h-[3rem] min-w-[50px]"
          )}
        >
          ...
        </DisplayFeatures>
      </td>
      {/* Actions End */}
    </tr>
  );
};

export default TransactionsTr;
