import React, { useEffect, useRef, useState } from "react";
import FieldSet from "@design-system/components/inputs/fieldset";
import Heading from "@design-system/components/inputs/heading";
import Input from "@design-system/components/inputs/input";
import InputLabel from "@design-system/components/inputs/label";
import ImportIcon from "@public/img/dashboard/import-kyc-icon.svg";
// import ImportIcon from "@public/img/dashboard/import-kyc-icon.svg";
import IconButton from "@design-system/components/inputs/icon-button";

const style = {
  resetInputFocus: `focus-within:ring focus-within:ring-secondaryText focus-within:ring-opacity-75 focus:outline-none`,
};

const UploadKYCForm = () => {
  const [selectedFile, setSelectedFile] = useState({ files: {}as IFile });
  const [isFilePicked, setIsFilePicked] = useState(false);

  // Handles user's file change/select
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files;
    if (e.target.files != null && e.target.files !== undefined) {
      files = e.target.files;
    } else {
      return;
    }
    setSelectedFile({ files: files[0] });
    setIsFilePicked(true);
  };

  interface IFile extends Blob {
    name?: string;
  }

  const handleSubmission = () => {
    const formData = new FormData();
    // Append the selected file to formData. This will be sent to the Backend
    formData.append("File", selectedFile.files);
  };

  // Sets focus to the first input field when this form accordion is opened. focusInput cannot be null, that's what the null! means.
  const focusInput = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    focusInput.current.focus();
  }, []);
  return (
    <form className='w-full space-y-[16px]'>
      <Heading textsize='xs' boldness='normal'>
        This helps us tailor solutions to your needs.
      </Heading>

      {/* Phone number */}
      <FieldSet>
        <InputLabel labelfor='document-type'>Document type</InputLabel>
        <Input
          classstyle={`${style.resetInputFocus}`}
          width='!w-full'
          type='tel'
          name='document-type'
          placeholder='Drivers License'
          ref={focusInput}
        />
      </FieldSet>
      {/* Phone number End */}

      {/* Add Address */}
      <div className='space-y-[16px]'>
        <FieldSet>
          <InputLabel labelfor='street-address'>Upload document</InputLabel>
          <div
            id='kyc-file-input'
            className=' w-full h-[250px] flex flex-col items-center border-[3px] border-dashed rounded-[12px] relative cursor-pointer'
          >
            <input
              className='w-full appearance-none cursor-pointer z-[10]'
              type='file'
              name='file'
              onChange={(e) => fileChangeHandler(e)}
            />

            {/* Import description */}
            <div className='absolute left-[50%] top-[30px] translate-x-[-50%] space-y-[24px]'>
              <p className='max-w-[312.65px] text-center text-[14px] text-[#8E8AB5] font-serif'>
                Drag and drop to upload your file (Jpeg, Pngs, PDFs, docx) or
                import file from your computer
              </p>
              <div className='w-[153px] h-[46px] translate-x-[50%] bg-secondaryText flex items-center justify-center space-x-[13px] uppercase font-serif font-[18px] font-[500] text-semPrimary rounded-[4px]'>
                <ImportIcon />
                <p>import</p>
              </div>
              {isFilePicked && (
                <p>
                  <>File Name: {selectedFile?.files?.name}</>
                </p>
              )}
            </div>
          </div>
        </FieldSet>
      </div>
      {/* Add Address End */}

      {/* Submit Button */}
      <div className='w-full flex justify-end'>
        <IconButton classstyle='!uppercase' type='submit' size='lg'>
          Save
        </IconButton>
      </div>
    </form>
  );
};

export default UploadKYCForm;
