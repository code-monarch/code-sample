import React, { useEffect, useRef } from "react";
import FieldSet from "@design-system/components/inputs/fieldset";
import Heading from "@design-system/components/inputs/heading";
import Input from "@design-system/components/inputs/input";
import InputLabel from "@design-system/components/inputs/label";
import Flex from "@design-system/components/layout/flex";
import IconButton from "@design-system/components/inputs/icon-button";

const style = {
  resetInputFocus: `focus-within:ring focus-within:ring-secondaryText focus-within:ring-opacity-75 focus:outline-none`,
};

const AddPersonaldetailsForm = () => {
  // Sets focus to the first input field when this form accordion is opened
  const focusInput = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    focusInput.current.focus();
  }, []);
  return (
    <form className='w-full space-y-[16px]'>
      <Heading textsize='xs' boldness='normal'>
        This is a fundamental step of the KYC process
      </Heading>

      {/* Phone number */}
      <FieldSet>
        <InputLabel labelfor='phone-number'>Phone number</InputLabel>
        <Input
          classstyle={`${style.resetInputFocus}`}
          width='!w-full'
          type='tel'
          name='phone-number'
          placeholder='(759) 012-3985'
          ref={focusInput}
        />
      </FieldSet>
      {/* Phone number End */}

      {/* Add Address */}
      <div className='space-y-[16px]'>
        <Heading textsize='sm' boldness='medium'>
          Add address
        </Heading>

        <FieldSet>
          <InputLabel labelfor='street-address'>Street Address</InputLabel>
          <Input
            classstyle={`${style.resetInputFocus}`}
            width='!w-full'
            type='text'
            name='street-address'
            placeholder='24 Roentgen Ave, Houston, TX.'
          />
        </FieldSet>

        {/* State and Country */}
        <Flex classstyle='!w-full !justify-start !space-x-[24px]'>
          {/* State */}
          <FieldSet classstyle='!w-full'>
            <InputLabel labelfor='state'>State</InputLabel>
            <Input
              classstyle={`${style.resetInputFocus}`}
              width='!w-full'
              type='text'
              name='state'
              placeholder='State'
            />
          </FieldSet>
          {/* State End */}

          {/* Country */}
          <FieldSet classstyle='!w-full'>
            <InputLabel labelfor='country'>Country</InputLabel>
            <Input
              classstyle={`${style.resetInputFocus}`}
              width='!w-full'
              type='text'
              name='country'
              placeholder='Country'
            />
          </FieldSet>
          {/* Country End */}
        </Flex>
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

export default AddPersonaldetailsForm;
