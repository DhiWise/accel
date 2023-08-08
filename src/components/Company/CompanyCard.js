import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

export default function CompanyCard() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/company-detail/1")} className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col items-start justify-start p-2 w-full">
      <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
        <Img
          className="h-20 md:h-auto object-cover rounded-lg w-20"
          src="images/img_niibrjp1_80x80.png"
          alt="niibrjpOne"
        />
        <div className="flex flex-1 md:flex-col flex-row gap-8 items-center justify-start p-2.5 w-full">
          <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-full">
            <Text
              className="text-[15px] text-gray-900 w-auto"
              size="txtInterSemiBold15"
            >
              DhiWise
            </Text>
            <Text
              className="max-w-[924px] md:max-w-full text-gray-700 text-sm"
              size="txtInterRegular14Gray700"
            >
              Automated code generation platform enabling developers
              build modern apps 10x faster and 20x more efficiently
              on frameworks like Flutter and React.
            </Text>
          </div>
          <Img
            className="h-5 w-5"
            src="images/img_arrowright_blue_gray_700.svg"
            alt="arrowright"
          />
        </div>
      </div>
    </div>
  )
}