import React from "react";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import Button from "@design-system/components/inputs/button";
import {
  AlertDialogue,
  AlertDialogueOverlay,
  AlertDialogueTrigger,
} from "@design-system/components/data-display/alert-dialogue";
import { useToggle } from "@hooks/useToggle";
import GenerateApiKeyModal from "../modals/generate-api-key-modal";
import GeneratedApiKeysTable from "./generated-api-keys-table";

const ApiKeysSetting = () => {
  const [isModalOpen, setIsModalOpen] = useToggle(false);
  return (
    <div className='w-full min-h-screen bg-white flex items-start justify-start space-x-[36px] p-[35px] rounded-[8px] shadow-md transition-all duration-1200 ease-in-out'>
      <div className='space-y-[40px]'>
        {/* Heading and Description */}
        <div className='space-y-[8px]'>
          <Heading textsize='md' classstyle='text-black font-serif !font-[500]'>
            API Keys
          </Heading>

          <Paragraph
            textsize='sm'
            classstyle='text-semPrimary font-serif font-[400] max-w-[609px]'
          >
            API Keys let you use <span className='text-semBlue600'>CaaS</span>{" "}
            from within other tools or your own software.{" "}
            <span className='text-semBlue600'>
              Check out our list of tools and API
            </span>{" "}
            to see what you can do!
          </Paragraph>
        </div>
        {/* Heading and Description End */}
        {/* Generate API Key Button And Modal */}
        <AlertDialogue isopen={isModalOpen} setisopen={setIsModalOpen}>
          <AlertDialogueTrigger classstyle='!text-red-500'>
            <Button size='lg' classstyle='uppercase'>
              Generate new api key
            </Button>
          </AlertDialogueTrigger>
          <AlertDialogueOverlay isopen={isModalOpen}>
            <GenerateApiKeyModal />
          </AlertDialogueOverlay>
        </AlertDialogue>
        {/* Generate API Key Button And Modal End */}
        <GeneratedApiKeysTable />
      </div>
    </div>
  );
};

export default ApiKeysSetting;
