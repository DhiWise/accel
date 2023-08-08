import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, List, ReactTable, Text, Pagination } from "components";

const InterestsReceivedModal = (props) => {
  const tableData = React.useRef([
    { name: "Ankush Jain", company: "Akto", type: "Large Fund" },
    { name: "Ankita", company: "Akto.io", type: "Large Fund" },
    { name: "Rahul Gupta", company: "Mymandir", type: "Large Fund" },
    { name: "Sanjay Bhat", company: "Anar", type: "Large Fund" },
    { name: "Phanindra Sama", company: "redBus", type: "Large Fund" },
    { name: "Jesal Mehta", company: "Aavenir", type: "Large Fund" },
    { name: "Akash Venkat", company: "Kluster", type: "Large Fund" },
    { name: "Vivek", company: "4TiGO", type: "Large Fund" },
    { name: "Baskar S", company: "amagi", type: "Large Fund" },
    { name: "Tejas Gawande", company: "Chronicle", type: "Large Fund" },
    { name: "Revant Bhate", company: "Mosaic Wellness", type: "Large Fund" },
    { name: "Suman Gopalan", company: "Freshworks Inc.", type: "Large Fund" },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <Text
            className="pb-2 pl-4 pt-4 text-gray-900 text-sm"
            size="txtInterSemiBold14Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[395px] pl-4 py-2.5 text-black-900 text-xs uppercase"
            size="txtInterSemiBold12"
          >
            Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("company", {
        cell: (info) => (
          <Text
            className="pb-2 pt-4 text-gray-700 text-sm"
            size="txtInterRegular14Gray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[379px] py-2.5 text-black-900 text-xs uppercase"
            size="txtInterSemiBold12"
          >
            Company
          </Text>
        ),
      }),
      tableColumnHelper.accessor("type", {
        cell: (info) => (
          <Text
            className="pb-2 pt-[17px] text-gray-700 text-sm"
            size="txtInterRegular14Gray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[385px] py-2.5 text-black-900 text-xs uppercase"
            size="txtInterSemiBold12"
          >
            Type
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[85%]"
      overlayClassName="bg-gray-900_54 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="sm:h-auto md:h-auto max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[1224px] mx-auto p-8 md:px-5 rounded-lg w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-7 items-start justify-start w-full">
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center w-full"
                onClick={() => navigate("/interestsreceivedone")}
                rightIcon={
                  <div className="h-10 ml-[35px] w-10 bg-gray-900_7f rounded-[50%]" onClick={props.onRequestClose}>
                    <Img
                      className="h-10 rounded-[20px]"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  </div>
                }
              >
                <div className="font-semibold leading-[normal] md:text-[22px] sm:text-xl text-2xl text-gray-900 text-left">
                  Email Sent
                </div>
              </Button>
              <div className="flex flex-col gap-9 items-start justify-start w-full">
                <div className="overflow-auto outline outline-[1px] outline-gray-200 rounded-lg w-full">
                  <ReactTable
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={""}
                    headerClass="bg-gray-50 border border-gray-200"
                  />
                </div>
                <Pagination
                  totalPageCount={2}
                  pageRangeDisplayed={2}
                  handlePageChange={() => { }}
                  PreviousLabel={({ onPreviousChange }) => (
                    <div
                      className="common-pointer border border-gray-200_7e border-solid flex flex-1 flex-col h-9 md:h-auto items-center justify-center p-2.5 rounded-lg w-full"
                      onClick={onPreviousChange}
                    >
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  )}
                  NextLabel={({ onNextChange }) => (
                    <div
                      className="common-pointer border border-gray-200 border-solid flex flex-1 flex-col h-9 md:h-auto items-center justify-center p-2.5 rounded-lg w-full"
                      onClick={onNextChange}
                    >
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-7 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                size="txtInterSemiBold24"
              >
                Feedback Received
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start outline outline-[1px] outline-gray-200 rounded-lg w-full">
                  <List
                    className="bg-gray-50 border-b border-gray-200 border-solid sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start px-4 py-2.5 rounded-tl-lg rounded-tr-lg w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xs uppercase w-auto"
                        size="txtInterSemiBold12"
                      >
                        Name
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xs uppercase w-auto"
                        size="txtInterSemiBold12"
                      >
                        Company
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xs uppercase w-auto"
                        size="txtInterSemiBold12"
                      >
                        Feedback
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start p-4 w-full">
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtInterSemiBold14Gray900"
                        >
                          Peeyush Ranjan
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm w-auto"
                          size="txtInterRegular14Gray700"
                        >
                          Google
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm w-auto"
                          size="txtInterRegular14Gray700"
                        >
                          Love it, reminds me of a startup I had been part of 20
                          years ago :)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default InterestsReceivedModal;
