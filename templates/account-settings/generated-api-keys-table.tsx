import React, { useRef, useState } from "react";
import CopyToClipboardIcon from "@public/img/dashboard/copy-to-clipboard.svg";

const services = [
  {
    name: "Label_1",
    api_keys: "CaaS_test_2b495352f846d8...",
    date_created: "20 Aug, 2022 ",
    last_accessed: "20 Aug, 2022 ",
    action: "Delete",
  },
  // {
  //   name: "Label_1",
  //   api_keys: "CaaS_test_2b495352f847d8...",
  //   date_created: "20 Aug, 2022 ",
  //   last_accessed: "20 Aug, 2022 ",
  //   action: "Delete",
  // },
  // {
  //   name: "Label_1",
  //   api_keys: "CaaS_test_2b495352f846ff5...",
  //   date_created: "20 Aug, 2022 ",
  //   last_accessed: "20 Aug, 2022 ",
  //   action: "Delete",
  // },
];

const GeneratedApiKeysTable = () => {
  const apiKeyRef = useRef<HTMLInputElement>(null!);
  const [apiKey, setApiKey] = useState();
  const [isCopied, setIsCopied] = useState(false);

  // Function that copies API Key to clipboard
  function copyToClipboard() {
    navigator.clipboard.writeText(`${apiKeyRef.current.value}`);
    console.log(navigator.clipboard.readText());
  }
  // function copyToClipboard() {
  //   apiKeyRef.current.select();
  //   document.execCommand("copy");
  // }
  function revertCopied(){
    setIsCopied(false);
  }
  return (
    <table className='w-full mx-[20px]'>
      <thead className='bg-gray-50'>
        <tr>
          <th
            scope='col'
            className='py-3.5 pr-[48px] pl-3 whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60'
          >
            Name
          </th>
          <th
            scope='col'
            className='py-3.5  pr-[48px] pl-[96px] whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60'
          >
            API keys
          </th>
          <th
            scope='col'
            className='py-3.5 pl-5 pr-5 whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60'
          >
            Date created
          </th>
          <th
            scope='col'
            className='py-3.5 pl-5 pr-[48px] whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60'
          >
            Last accessed
          </th>
          <th
            scope='col'
            className='pr-[48px] py-3.5 whitespace-nowrap text-sm text-left font-[500] font-serif !text-semBlack opacity-60'
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200 bg-white'>
        {services.map((person, idx) => (
          <tr key={idx}>
            <td className='whitespace-nowrap px-3 py-4 text-base font-serif text-gray-500 space-x-[8px]'>
              {person.name}
            </td>
            <td className='flex items-center whitespace-nowrap pl-[96px] pr-5 py-4 text-base font-serif text-gray-500'>
              <input
                type='text'
                className='w-fit appearance-none outline-none'
                value={person.api_keys}
                ref={apiKeyRef}
                readOnly
              />
              <span
                className='ml-[16px] cursor-pointer'
                onClick={() => {
                  copyToClipboard();
                  setIsCopied(true);
                  setTimeout(revertCopied, 3000);
                }}
              >
                {isCopied ? (
                  <span className='bg-[#EDEBFD] text-[#4B419F] px-[10px] py-[10px]'>
                    Copied
                  </span>
                ) : (
                  <CopyToClipboardIcon />
                )}
              </span>
            </td>
            <td className='whitespace-nowrap pl-5 pr-5 py-4 text-base font-serif text-gray-500'>
              {person.date_created}
            </td>
            <td className='whitespace-nowrap pl-5 pr-5 py-4 text-base text-left font-serif text-gray-500'>
              {person.last_accessed}
            </td>
            <td className='whitespace-nowrap pr-[48px] pl-0 py-4 text-base text-left text-red-500 font-serif font-[500] cursor-pointer hover:underline'>
              {person.action}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GeneratedApiKeysTable;
