import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-indigo-900 flex flex-col font-inter gap-5 items-center justify-center mx-auto px-5 py-[283px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start md:px-5 w-auto">
          <Text
            className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700 w-auto"
            size="txtInterBold26"
          >
            Atoms Demo Day
          </Text>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start p-12 md:px-5 rounded-[12px] w-[429px] sm:w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-[333px] md:w-full">
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-auto"
              size="txtInterBold26Black900"
            >
              Log in to Atoms Demo Day
            </Text>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtInterBold14"
              >
                Please enter your email address
              </Text>
              <Input
                name="emailinput"
                placeholder="Enter your email"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-gray-400 text-left text-sm w-full"
                wrapClassName="border border-gray-200 border-solid pb-2 pt-[11px] px-3 rounded-lg w-full"
                type="email"
              ></Input>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtInterBold14"
              >
                Please enter your password
              </Text>
              <Input
                name="passwordinput"
                placeholder="Enter your password"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-gray-400 text-left text-sm w-full"
                wrapClassName="border border-gray-200 border-solid pb-2 pt-[11px] px-3 rounded-lg w-full"
                type="password"
              ></Input>
            </div>
            <Button
              className="common-pointer bg-indigo-900 cursor-pointer font-semibold leading-[normal] py-2.5 rounded-lg text-center text-sm text-white-A700 w-full"
              onClick={() => navigate("/allcompanies")}
            >
              Continue
            </Button>
            <Line className="bg-gray-100 h-px w-full" />
            <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-center justify-center px-4 py-2.5 rounded-lg w-full">
              <div
                className="common-pointer flex flex-row gap-2.5 items-center justify-center w-auto"
                onClick={() => googleSignIn()}
              >
                <Img
                  className="h-5 md:h-auto object-cover w-5"
                  src="images/img_googleglogo.png"
                  alt="googleglogo"
                />
                <Text
                  className="text-blue_gray-800 text-sm w-auto"
                  size="txtInterSemiBold14"
                >
                  Continue with Google
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
