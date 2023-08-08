import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import ReactPlayer from "react-player";
import { Button, Img, Text } from "components";

const AllCompaniesDetailPage = () => {

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
        <div className="flex flex-1 flex-col gap-7 h-full items-start justify-start md:px-5 px-8 py-6 w-full">
          <Img
            className="h-[200px] sm:h-auto object-cover rounded-[12px] w-full"
            src="images/img_ib074z21.png"
            alt="ib074zTwentyOne"
          />
          <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtInterRegular14Gray700"
            >
              All Companies
            </Text>
            <Img
              className="h-3.5 w-3.5"
              src="images/img_arrowright_blue_gray_700.svg"
              alt="arrowright"
            />
            <Text
              className="text-blue_gray-800 text-sm w-auto"
              size="txtInterSemiBold14"
            >
              DhiWise
            </Text>
          </div>
          <div className="bg-white-A700 border border-gray-200 border-solid flex md:flex-col flex-row gap-2.5 items-center justify-start p-2.5 rounded-[12px] w-full">
            <Img
              className="h-48 md:h-auto object-cover w-48"
              src="images/img_niibrjp1.png"
              alt="niibrjpOne"
            />
            <div className="flex flex-1 flex-col gap-[3px] h-full items-start justify-center w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-gray-900 w-auto"
                size="txtInterSemiBold56"
              >
                DhiWise
              </Text>
              <Button className="bg-indigo-900 cursor-pointer font-semibold leading-[normal] min-w-[129px] py-2.5 rounded-lg text-center text-sm text-white-A700">
                Show Website
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-2.5 items-start justify-start p-8 sm:px-5 rounded-[12px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtInterSemiBold24"
              >
                Founders
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
              <div className="bg-gray-100 flex flex-col gap-2.5 items-start justify-start p-2.5 rounded-[12px] w-[255px]">
                <Img
                  className="h-[235px] md:h-auto object-cover rounded-lg w-[235px]"
                  src="images/img_copyofceovishal.png"
                  alt="copyofceovishal"
                />
                <div className="flex flex-col items-start justify-start p-2.5 w-full">
                  <Text
                    className="text-indigo-900 text-xs uppercase w-auto"
                    size="txtInterSemiBold12Indigo900"
                  >
                    Vishal Virani
                  </Text>
                </div>
              </div>
              <div className="bg-gray-100 flex flex-col gap-2.5 items-start justify-start p-2.5 rounded-[12px] w-[255px]">
                <Img
                  className="h-[235px] md:h-auto object-cover rounded-lg w-[235px]"
                  src="images/img_copyofctorahuk.png"
                  alt="copyofctorahuk"
                />
                <div className="flex flex-col items-start justify-start p-2.5 w-full">
                  <Text
                    className="text-indigo-900 text-xs uppercase w-auto"
                    size="txtInterSemiBold12Indigo900"
                  >
                    Rahul Shingala
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 h-[822px] md:h-auto items-start justify-start w-full">
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 w-auto"
              size="txtInterSemiBold26"
            >
              Pitch Video
            </Text>
            <div className="flex flex-col h-[678px] md:h-auto items-start justify-start w-full">
              <div className="h-[678px] w-full">
                <ReactPlayer
                  url="https://calendar.google.com/calendar/u/0/r"
                  controls
                  width="100%"
                  height="100%"
                />{" "}
              </div>
            </div>
            <div className="flex flex-row gap-3 items-start justify-center p-2.5 w-full">
              <Button className="bg-indigo-900 cursor-pointer font-semibold leading-[normal] min-w-[91px] py-2.5 rounded-lg text-center text-sm text-white-A700">
                Previous
              </Button>
              <Button className="border border-gray-200 border-solid cursor-pointer font-semibold leading-[normal] min-w-[167px] py-2.5 rounded-lg text-blue_gray-800 text-center text-sm">
                View All Companies
              </Button>
              <Button className="border border-gray-200 border-solid cursor-pointer font-semibold leading-[normal] min-w-[64px] py-2.5 rounded-lg text-blue_gray-800 text-center text-sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCompaniesDetailPage;
