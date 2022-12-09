import { AlertDialogueAction, AlertDialogueContent, AlertDialogueDescription, AlertDialogueTitle } from '@design-system/components/data-display/alert-dialogue';
import FieldSet from '@design-system/components/inputs/fieldset';
import IconButton from '@design-system/components/inputs/icon-button';
import Input from '@design-system/components/inputs/input';
import InputLabel from '@design-system/components/inputs/label';
import { IFundWalletModalInput } from '@design-system/types';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import FormError from '../form/form-error';

const FundWalletModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFundWalletModalInput>();
  return (
    <>
      <AlertDialogueContent
        classstyle='bg-white w-[90vw] smLaptops:w-[702px] h-fit text-black'
        // aschild={true}
      >
        <>
          <AlertDialogueTitle classstyle='text-serif text-primaryText text-[24px] font-[500] mb-[32px]'>
            Fund Wallet
          </AlertDialogueTitle>
          <div className='mb-[32px] flex flex-col space-y-[32px]'>
            {/* Amount */}
            <FieldSet>
              <InputLabel labelfor='amount' classstyle='text-[16px]'>
                Amount
              </InputLabel>
              <Input
                width='!w-full'
                type='number'
                placeholder='enter amount'
                {...register("amount", { required: "Please enter Amount" })}
              />
              <FormError errors={errors} name='amount' />
            </FieldSet>
            {/* Amount End */}

            {/* Depositor's name */}
            <FieldSet>
              <InputLabel labelfor='amount' classstyle='text-[16px]'>
                Depositor&apos;s name
              </InputLabel>
              <Input
                width='!w-full'
                type='text'
                placeholder='Imran Chimuchi'
                {...register("name", {
                  required: "Please enter Depositor's Name",
                })}
              />
              <FormError errors={errors} name='name' />
            </FieldSet>
            {/* Depositor's name End */}

            {/* Email Address */}
            <FieldSet>
              <InputLabel labelfor='amount' classstyle='text-[16px]'>
                Email address
              </InputLabel>
              <Input
                width='!w-full'
                type='text'
                placeholder='Imranchimuchi@cass.com'
                {...register("email", {
                  required: "Please enter Email address",
                })}
              />
              <FormError errors={errors} name='email' />
            </FieldSet>
            {/* Email Address End */}

            {/* Remark */}
            <FieldSet>
              <InputLabel labelfor='amount' classstyle='text-[16px]'>
                Remark
              </InputLabel>
              <Input
                width='!w-full'
                type='text'
                placeholder='eWallet funding'
                {...register("remark", { required: "Please enter remark" })}
              />
              <FormError errors={errors} name='remark' />
            </FieldSet>
            {/* Remark End */}
          </div>
          <AlertDialogueAction classstyle='w-full'>
            <IconButton classstyle='w-full uppercase' size='lg'>
              PROCEED
            </IconButton>
          </AlertDialogueAction>
        </>
      </AlertDialogueContent>
    </>
  );
};

export default FundWalletModal