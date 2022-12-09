import React, { ReactNode, useEffect, useState } from "react";
import SuccessIconIndicator from "@public/img/dashboard/success-icon-indicator.svg";
import CancelledIconIndicator from "@public/img/dashboard/cancelled-icon-indicator.svg";
import PendingIconIndicator from "@public/img/dashboard/pending-icon-indicator.svg";

interface IProps {
    status: "success" | "pending" | "cancelled" | "failed";
    // status: "active" | "pending" | "cancelled"; This are the right types
}

const StatusIndicator = ({ status }: IProps) => {
  const [indicator, setIndicator] = useState<ReactNode>();
  useEffect(() => {
    switch (status.toLowerCase()) {
      case "pending":
        setIndicator(<PendingIconIndicator />);
        break;
      case "success":
        setIndicator(<SuccessIconIndicator />);
        break;
      case "cancelled":
        setIndicator(<CancelledIconIndicator />);
        break;
      case "failed":
        setIndicator(<CancelledIconIndicator />);
        break;
      default:
        setIndicator(<PendingIconIndicator />);
    }
  }, [status]);

  return <span>{indicator}</span>;
};

export default StatusIndicator;
