import React from "react";
import { ErrorMessage } from "@hookform/error-message";

// A simple component to render associated input's error message.

interface IFormError {
  errors: {};
  name: string;
}

const FormError = ({ errors, name }: IFormError) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      as={<p className='text-red-500 text-xs mt-1' />}
    >
      {({ messages }: Record<string, string>) =>
        messages &&
        Object.entries(messages).map(([type, message]) => (
          <p key={type}>{message}</p>
        ))
      }
    </ErrorMessage>
  );
};

export default FormError;
