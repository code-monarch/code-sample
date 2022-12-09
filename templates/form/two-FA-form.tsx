import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import IconButton from "../../components/inputs/icon-button";
import classes from "../../design/inputs.classes";
import { joinClasses } from "@design-system/utils/join-classes";
// import { IInputClasses } from "../inputs/input";
import Heading from "../../components/inputs/heading";
import Paragraph from "../../components/inputs/paragragh";

const TwoFAForm = () => {
  // const router = useRouter();
  // const itemEls = useRef<HTMLInputElement>(null!);

  const [focus, setFocus] = useState("");
  const [twoFA, setTwoFA] = useState(new Array(6).fill("")); // Two FA token is a 6 digit token
  const [filledCorrectToken, setFilledCorrectToken] = useState(false); // Helps us check whether our user filled in their correct 2FA token else throw error
  const [isValid, setIsValid] = useState(false); // Helps us check if there is an input field that wasn't filled. submit button will still remain disabled if there is.
  const [deleteInput, setDeleteInput] = useState(false);
  const [pastedOtp, setPastedOtp] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(); // Tags every input field with a index, we will use this to identify a particular input that is changed or focused
  const [inputValue, setInputValue] = useState(""); // Sets the input value to an empty string when backspace key is clicked

  console.log("Two FA: ", twoFA);

  // Create a hook for this
  const handleChange = (
    element: EventTarget & HTMLInputElement,
    index: number
  ) => {
    if (element.value !== " ") {
      setTwoFA([...twoFA.map((d, idx) => (idx === index ? element.value : d))]);
      if (element.nextSibling && deleteInput === false) {
        (element.nextSibling as HTMLElement)?.focus();
      }
    } else return;
  };

  // This function controls input focus when either the left or right arrow keys is pressed
  // Create a Hook for this
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (e.key == "ArrowLeft") {
      (
        (target.previousSibling as HTMLInputElement) &&
        (target.previousSibling as HTMLInputElement)
      )?.focus();
      console.log("Move to previous sibling! ");
    } else if (e.key == "ArrowRight") {
      (target.nextSibling as HTMLInputElement) &&
        (target.nextSibling as HTMLInputElement)?.focus();
      console.log("Move to Next sibling! ");
    }
    if (e.key == "Backspace") {
      setInputValue("");
      setDeleteInput(true);
      setTwoFA([...twoFA.map((d, idx) => (idx === index ? inputValue : d))]);
      (target.previousSibling as HTMLInputElement) &&
        (target.previousSibling as HTMLInputElement)?.focus();
      if (!target.previousSibling) {
        setDeleteInput(false);
      }
    } else {
      setDeleteInput(false);
    }
  };

  // Set Invalidwhen auth token is not inputed completely
  useEffect(() => {
    if (twoFA.includes("")) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [twoFA]);

  useEffect(() => {
    if (pastedOtp.length === twoFA.length) {
      setTwoFA([...twoFA.map((d, idx) => (d = pastedOtp[idx]))]);
    } else return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pastedOtp]);

  // useEffect(() => {
  //   itemEls.current.focus()
  //   // setFocus("input-0");
  // }, []);

  return (
    <form className='w-[622px] bg-white flex flex-col space-y-[20px] p-[40px] pb-[64px] rounded-[12px] shadow-semShadow2 z-[3]'>
      <div className='max-w-[542px] space-y-[8px] mb-[24px]'>
        <Heading
          textsize='xl'
          classstyle='text-[#554A68] font-serif !font-[500]'
        >
          Phone number Authentication
        </Heading>

        <Paragraph
          textsize='sm'
          classstyle='text-semPrimary font-serif font-[400]'
        >
          Enter the token sent to your phone number
        </Paragraph>
      </div>
      <div className='w-full flex justify-center items-center mt-0 mb-[32px]'>
        <div className='w-full sm:w-[100%] flex justify-center items-center space-x-[10px]'>
          {twoFA.map((data: number, index) => (
            <input
              className={joinClasses(
                focus === `input-${index}` ? classes.authTokenInputClicked : "",
                classes.authTokenInputBase
              )}
              // ref={itemEls}
              type='text'
              placeholder='-'
              id={`input-${index}`}
              name={`input-${index}`}
              maxLength={1}
              key={index}
              value={data}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) {
                  return false;
                } else {
                  handleChange(e.target, index);
                  setInputValue(e.target.value);
                  setIndex(index);
                }
              }}
              onPaste={(e) => {
                navigator.clipboard
                  .readText()
                  .then((text) => {
                    // itemEls.current.push(text.split(""));
                    if (isNaN(Number(text))) {
                      return false;
                    } else {
                      setPastedOtp(text.split(""));
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              onBlur={() => setFocus("")}
              onKeyUp={(e) => handleKeyPress(e)}
              onFocus={() => {
                setFocus(`input-${index}`);
                console.log("FOCUSED INPUT: ", focus);
              }}
            />
          ))}
        </div>
      </div>

      <div className='w-full'>
        {/* Sign In Button */}
        <IconButton
          variant='primary'
          disabled={!isValid}
          // loading={true}
          size='lg'
          type='submit'
          classstyle='!w-full uppercase shadow-semShadow2'
        >
          Continue to Login
        </IconButton>

        {/* Resend token Button */}
        <IconButton
          variant='transparent'
          disabled={!isValid}
          // loading={true}
          size='lg'
          type='submit'
          classstyle='!w-full uppercase !bg-transparent !text-semPrimary !border-0 shadow-none'
        >
          resend token
        </IconButton>
      </div>
    </form>
  );
};

export default TwoFAForm;
