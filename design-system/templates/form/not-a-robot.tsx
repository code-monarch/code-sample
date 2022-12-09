import React from "react";
import Checkbox from "../../components/inputs/checkbox";
import ReCaptcha from "@public/img/reCaptcha.svg";

const NotARobot = () => {
  return (
    <div className='flex flex-none items-center justify-between w-full bg-dashboardBg py-[5px] px-[20px] border border-gray-300 shadow-[0px_0px_4px_rgba(0, 0, 0, 0.12)] rounded-[3px]'>
      <div>
        <Checkbox
          labelfor='not-a-robot'
          value='not-a-robot'
          labeltext={<span className='text-[16px]'>I`m not a robot</span>}
          required
          classstyle='robotoFont !border-gray-500'
        />
      </div>
      <ReCaptcha />
    </div>
  );
};

export default NotARobot;
