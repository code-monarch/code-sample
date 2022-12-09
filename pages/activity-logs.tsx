import Head from "next/head";
import type { NextPage } from "next";
import ActivityLogsTable from "@design-system/templates/activity-logs/activity-logs-table";
import DashboardPanel from "@design-system/components/layout/dashhboard-panel";
import InputSearchIcon from "@public/img/dashboard/input-search-icon.svg";
import FilterIcon from "@public/img/dashboard/filter-icon.svg";
import ExportIcon from "@public/img/dashboard/export-icon.svg";
import Layout from "@design-system/templates/shared/layout";
import Flex from "@design-system/components/layout/flex";
import Input from "@design-system/components/inputs/input";
import {
  PopOver,
  PopOverContent,
  PopOverTrigger,
} from "@design-system/components/data-display/popover";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import Link from "next/link";
import ExternalLinkIcon from "@design-system/components/icons/external-link-icon";
import RequireAuth from "@design-system/templates/shared/require-auth";

const ActivityLogs: NextPage = () => {
  return (
    <RequireAuth>
      <div>
        <Head>
          <title>CaaS by A&D Forensics</title>
          <meta
            name='description'
            content='Let our CaaS solution guide you easily through your complete
              Crypto Compliance Process'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Layout>
          <DashboardPanel classstyle='!pt-[30px]'>
            <div className='w-full flex flex-col space-y-[10px]'>
              {/* Heading */}
              <div className='flex flex-col space-y-[8px] mb-[12px]'>
                <Heading
                  textsize='sm'
                  boldness='medium'
                  classstyle='font-serif'
                >
                  View Audit Logs
                </Heading>
                <Paragraph textsize='xs' color='gray' classstyle='font-serif'>
                  Monitor any changes made to your project, schema and content
                  with audit logs.
                </Paragraph>
                <Link href='/'>
                  <a className='flex items-center font-serif font-[500] text-[14px] text-semBlue600'>
                    Learn More{" "}
                    <ExternalLinkIcon
                      width='15'
                      height='15'
                      color='#6657E6'
                      className='ml-[10px]'
                    />
                  </a>
                </Link>
              </div>
              {/* Heading End */}
              <Flex classstyle='w-full justify-between'>
                <div className='flex items-center justify-start space-x-[20px]'>
                  <div className='!bg-white !h-[44px] !w-[450px] relative'>
                    <span className='absolute left-[10px] top-[23px] bottom-0 translate-y-[-50%]'>
                      <InputSearchIcon />
                    </span>
                    <Input
                      type='search'
                      name='search-services'
                      placeholder='Search services'
                      classstyle='!w-full !h-full !bg-white pl-[50px] placeholder:!text-[14px] focus-within:ring focus-within:ring-[#EDEBFD] focus-within:ring-opacity-75'
                    />
                  </div>
                  <PopOver>
                    <PopOverTrigger>
                      <div className='h-[44px] flex items-center space-x-[12px] py-[12px] px-[16px] border-[1px] border-border-gray-300 rounded-[8px] cursor-pointer'>
                        <FilterIcon />
                        <p className='text-[14px] text-[#8E8AB5]'>Filter</p>
                      </div>
                    </PopOverTrigger>
                    <PopOverContent>Whatever should be here</PopOverContent>
                  </PopOver>
                </div>
                <div className='flex items-center font-serif font-[500] text-[#8E8AB5] py-[8px] px-[12px] space-x-[9px] border-[1px] border-[#e5e7eb] rounded-[6px] cursor-pointer'>
                  <ExportIcon />
                  <p>Export</p>
                </div>
              </Flex>
            </div>
            <ActivityLogsTable />
          </DashboardPanel>
        </Layout>
      </div>
    </RequireAuth>
  );
};

export default ActivityLogs;
