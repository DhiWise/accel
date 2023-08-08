import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import CompanyCard from "components/Company/CompanyCard";

const AllCompaniesPage = () => {

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar className="!sticky !w-[270px] bg-indigo-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col items-start justify-start mt-2.5 mx-auto pb-4 pl-3 pt-5 w-[246px]">
            <Img
              className="h-[34px] md:h-auto object-cover w-[169px] sm:w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: "20px",
                flexDirection: "column",
                color: "#ffffffa2",
                fontSize: "14px",
                [`&:hover, &.ps-active`]: {
                  color: "#17b5cb",
                  fontWeight: "400 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-end mb-[464px] sm:pr-5 pr-6 pt-[9px] w-[92%]"
          >
            <MenuItem
              active={window.location.pathname === "/allcompanies"}
              href="/allcompanies"
            >
              <div className="flex items-start justify-start sm:px-5">
                <Text className="w-auto">
                  All Companies
                </Text>
              </div>
            </MenuItem>
            <MenuItem
              active={window.location.pathname === "/interestsreceivedone"}
              href="/interestsreceivedone"
            >
              <div className="flex items-start justify-start sm:px-5">
                <Text className="w-auto">
                  Interests Received
                </Text>
              </div>
            </MenuItem>
            <MenuItem
              active={window.location.pathname === "/request"}
              href="/request"
            >
              <div className="flex items-start justify-start sm:px-5">
                <Text className="w-auto">
                  Request Support
                </Text>
              </div>
            </MenuItem>
          </Menu>

        </Sidebar>
        <div className="flex flex-1 flex-col gap-7 items-start justify-start pb-14 pt-6 md:px-5 px-8 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Img
              className="h-[617px] md:h-auto object-cover w-full"
              src="images/img_screenshot20221012.png"
              alt="screenshot20221"
            />
          </div>
          <div className="flex flex-col gap-7 items-start justify-start w-full">
            <div className="flex flex-row gap-4 items-start justify-end w-full">
              <Input
                name="search"
                placeholder="Search"
                className="leading-[normal] md:h-auto p-0 placeholder:text-gray-500 sm:h-auto sm:pr-5 text-[15px] text-gray-500 text-left w-full"
                wrapClassName="bg-white-A700 border border-gray-200 border-solid flex pb-1.5 pl-2.5 pr-[35px] pt-[9px] rounded-lg w-[22%]"
                prefix={
                  <Img
                    className="mt-px mb-auto h-5 mr-2"
                    src="images/img_search.svg"
                    alt="search"
                  />
                }
              ></Input>
              <Button className="bg-white-A700 border border-gray-200 border-solid cursor-pointer font-semibold leading-[normal] min-w-[80px] py-2.5 rounded-lg text-blue_gray-800 text-center text-sm">
                Search
              </Button>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCompaniesPage;
