import React, {useState} from "react";
import { AlertDialogueAction, AlertDialogueContent, AlertDialogueDescription, AlertDialogueTitle } from "@design-system/components/data-display/alert-dialogue";
import FieldSet from "@design-system/components/inputs/fieldset";
import IconButton from "@design-system/components/inputs/icon-button";
import Input from "@design-system/components/inputs/input";
import InputLabel from "@design-system/components/inputs/label";
import SelectServiceCheckbox from "@design-system/components/inputs/select-service-checkbox";

const GenerateApiKeyModal = () => {
  const [apiLabel, setApiLabel] = useState("Label 1") // Set a default API Label
  return (
    <AlertDialogueContent
      classstyle='bg-white w-[90vw] smLaptops:w-[702px] h-fit text-black'
      // aschild={true}
    >
      {" "}
      <AlertDialogueTitle classstyle='text-serif text-primaryText text-[24px] font-[500] mb-[32px]'>
        Generate API Key
      </AlertDialogueTitle>
      <AlertDialogueDescription classstyle='mb-[32px] flex flex-col space-y-[32px]'>
        {/* API Label */}
        <FieldSet>
          <InputLabel labelfor='api-label' classstyle='text-[16px]'>
            API Label
          </InputLabel>
          <Input
            width='!w-full'
            type='text'
            name='api-label'
            value={apiLabel}
            onchange={() => setApiLabel(apiLabel)}
            placeholder='label 1'
          />
        </FieldSet>
        {/* API Label End */}
        {/* Select Services */}
        <div className='flex flex-col space-y-[16px]'>
          <InputLabel
            classstyle='text-base font-sans'
            labelfor='select-services'
          >
            Select Services
          </InputLabel>
          {/* Services */}
          <div className='flex flex-wrap justify-center space-x-[8px]'>
            <SelectServiceCheckbox
              value={"KYC/KYV verification"}
              required={false}
              labelfor={"KYC/KYV verification"}
              labeltext={"KYC/KYV verification"}
              classstyle='mb-[8px]'
            />
            <SelectServiceCheckbox
              value={"Wallet screening"}
              required={false}
              labelfor={"Wallet screening"}
              labeltext={"Wallet screening"}
              classstyle='mb-[8px]'
            />
            <SelectServiceCheckbox
              value={"Travel rule compliance"}
              required={false}
              labelfor={"Travel rule compliance"}
              labeltext={"Travel rule compliance"}
              classstyle='mb-[8px]'
            />
            <SelectServiceCheckbox
              value={"Compliance unit training"}
              required={false}
              labelfor={"Compliance unit training"}
              labeltext={"Compliance unit training"}
              classstyle='mb-[8px]'
            />
            <SelectServiceCheckbox
              value={"Monitor client transaction activities."}
              required={false}
              labelfor={"Monitor client transaction activities."}
              labeltext={"Monitor client transaction activities."}
              classstyle='mb-[8px]'
            />
            <SelectServiceCheckbox
              value={"Travel rule compliance"}
              required={false}
              labelfor={"Travel rule compliance"}
              labeltext={"Travel rule compliance"}
              classstyle='mb-[8px]'
            />
            <SelectServiceCheckbox
              value={"Monitor client transaction activities."}
              required={false}
              labelfor={"Monitor client transaction activities."}
              labeltext={"Monitor client transaction activities."}
              classstyle='mb-[8px]'
            />
          </div>
        </div>
        {/* Select Services End */}
      </AlertDialogueDescription>
      <AlertDialogueAction classstyle='w-full'>
        <IconButton classstyle='w-full uppercase' size='lg'>
          Generate API Key
        </IconButton>
      </AlertDialogueAction>
    </AlertDialogueContent>
  );
};

export default GenerateApiKeyModal;
