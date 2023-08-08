import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import InterestsReceivedModal from "modals/InterestsReceived";

import { Img, Input, List, SelectBox, Text } from "components";

const filterByOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const InterestsReceivedOnePage = () => {
  const [isOpenInterestsReceivedModal, setInterestsReceivedModal] =
    React.useState(false);

  function handleOpenInterestsReceivedModal() {
    setInterestsReceivedModal(true);
  }
  function handleCloseInterestsReceivedModal() {
    setInterestsReceivedModal(false);
  }

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
        <div className="flex flex-1 flex-col gap-[30px] h-full items-start justify-start p-[30px] md:px-5 w-full">
          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-end w-full">
            <Input
              name="search"
              placeholder="Search"
              className="leading-[normal] md:h-auto p-0 placeholder:text-gray-500 sm:h-auto sm:pr-5 text-[15px] text-gray-500 text-left w-full"
              wrapClassName="bg-white-A700 border border-gray-200 border-solid flex sm:flex-1 pb-1.5 pl-2.5 pr-[35px] pt-[9px] rounded-lg w-[22%] sm:w-full"
              prefix={
                <Img
                  className="mt-px mb-auto h-5 mr-2"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
            ></Input>
            <SelectBox
              className="bg-white-A700 border border-gray-200 border-solid sm:flex-1 leading-[normal] px-3 py-[7px] rounded-lg text-[15px] text-gray-500 text-left w-[13%] sm:w-full"
              placeholderClassName="text-gray-500"
              indicator={
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isSearchable={false}
              placeholder="Filter by"
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <Img
                    className="h-5 mr-1.5 w-5"
                    src="images/img_filter11_1.svg"
                    alt="filter_11 1"
                  />
                  <span>{e.label}</span>
                </div>
              )}
              name="frameFourteen"
              isMulti={false}
              options={filterByOptionsList}
            />
          </div>
          <List
            className="flex flex-col gap-2.5 h-full items-start w-full"
            orientation="vertical"
          >
            <div
              className="common-pointer bg-white-A700 border border-gray-200 border-solid flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-start my-0 p-2 rounded-[12px] w-full"
              onClick={handleOpenInterestsReceivedModal}
            >
              <Img
                className="h-20 md:h-auto object-cover w-20"
                src="images/img_niibrjp1.png"
                alt="niibrjpOne"
              />
              <div className="flex flex-1 flex-row gap-[3px] h-full items-center justify-between p-2.5 w-full">
                <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                  <Text
                    className="text-[15px] text-gray-900 w-auto"
                    size="txtInterSemiBold15"
                  >
                    DhiWise
                  </Text>
                  <Text
                    className="text-gray-700 text-sm w-auto"
                    size="txtInterRegular14Gray700"
                  >
                    23 Interested Investors
                  </Text>
                </div>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowright_blue_gray_700.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div
              className="common-pointer bg-white-A700 border border-gray-200 border-solid flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-start my-0 p-2 rounded-[12px] w-full"
              onClick={handleOpenInterestsReceivedModal}
            >
              <Img
                className="h-20 md:h-auto object-cover w-20"
                src="images/img_niibrjp1.png"
                alt="niibrjpOne"
              />
              <div className="flex flex-1 flex-row gap-[3px] h-full items-center justify-between p-2.5 w-full">
                <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                  <Text
                    className="text-[15px] text-gray-900 w-auto"
                    size="txtInterSemiBold15"
                  >
                    DhiWise
                  </Text>
                  <Text
                    className="text-gray-700 text-sm w-auto"
                    size="txtInterRegular14Gray700"
                  >
                    23 Interested Investors
                  </Text>
                </div>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowright_blue_gray_700.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div
              className="common-pointer bg-white-A700 border border-gray-200 border-solid flex flex-1 md:flex-col flex-row gap-2.5 items-start justify-start my-0 p-2 rounded-[12px] w-full"
              onClick={handleOpenInterestsReceivedModal}
            >
              <Img
                className="h-20 md:h-auto object-cover w-20"
                src="images/img_niibrjp1.png"
                alt="niibrjpOne"
              />
              <div className="flex flex-1 flex-row gap-[3px] h-full items-center justify-between p-2.5 w-full">
                <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                  <Text
                    className="text-[15px] text-gray-900 w-auto"
                    size="txtInterSemiBold15"
                  >
                    DhiWise
                  </Text>
                  <Text
                    className="text-gray-700 text-sm w-auto"
                    size="txtInterRegular14Gray700"
                  >
                    23 Interested Investors
                  </Text>
                </div>
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowright_blue_gray_700.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </List>
        </div>
      </div>
      {isOpenInterestsReceivedModal ? (
        <InterestsReceivedModal
          isOpen={isOpenInterestsReceivedModal}
          onRequestClose={handleCloseInterestsReceivedModal}
        />
      ) : null}
    </>
  );
};

export default InterestsReceivedOnePage;
