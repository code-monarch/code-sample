import React from "react";
import Checkbox from "../../components/inputs/checkbox";
import Link from "next/link";
import Flex from "../../components/layout/flex";

const TermsAndConditionsCheckbox = () => {
  return (
    <Flex>
      <Checkbox
        labelfor='terms/conditions'
        value='read terms'
        labeltext={
          <div className='text-[16px] max-w-[502px]'>
            By creating an account, you agree to our &nbsp;
            <Link href={"/terms-conditions"}>
              <a className='link'>Terms of use</a>
            </Link>
            &nbsp; and acknowledge our &nbsp;
            <Link href={"/privacy-policy"}>
              <a className='link'>Privacy Policy</a>
            </Link>
          </div>
        }
        required
        classstyle='robotoFont !border-gray-500 py-[10px]'
      />
    </Flex>
  );
};

export default TermsAndConditionsCheckbox;
