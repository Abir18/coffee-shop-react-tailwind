import { useMemo } from "react";

const MenuItemsContainer = ({
  drinkDescriptionId,
  drinkName,
  propTop,
  propLeft,
  propBackgroundColor,
  propOpacity,
  propColor,
  propWidth,
}) => {
  const waffleWithSlicedBlueberriesStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      opacity: propOpacity,
    };
  }, [propBackgroundColor, propOpacity]);

  const divStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const textStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute top-[2364px] left-[277px] w-[668px] h-36 flex flex-col items-center justify-end text-left text-sm text-lightgray font-value-sans-pro"
      style={waffleWithSlicedBlueberriesStyle}
    >
      <img
        className="w-[668px] relative rounded-lg h-36 opacity-[0.07]"
        alt=""
        src="/vector-704.svg"
      />
      <div className="w-[598px] h-[84px] flex flex-row items-center justify-start gap-[16px] mt-[-114px]">
        <img
          className="w-[84px] relative h-[84px]"
          alt=""
          src={drinkDescriptionId}
        />
        <div className="w-[498px] relative h-[84px]">
          <div className="absolute top-[34px] left-[302px] tracking-[0.06em] leading-[24px] inline-block w-[127px]">
            ..................................
          </div>
          <div className="absolute top-[13px] left-[438px] w-[60px] h-[60px] text-xl text-white">
            <div
              className="absolute top-[1px] left-[1px] rounded-[50%] bg-saddlebrown-100 w-[58px] h-[58px]"
              style={ellipseDivStyle}
            />
            <div
              className="absolute top-[15px] left-[15px] tracking-[0.01em] leading-[32px] font-medium inline-block w-[30px] h-[30px]"
              style={divStyle}
            >
              $10
            </div>
            <div className="absolute top-[-1px] left-[-1px] rounded-[50%] box-border w-[62px] h-[62px] border-[1px] border-dashed border-secondary" />
          </div>
          <div
            className="absolute top-[0px] left-[0px] w-[302px] flex flex-col items-start justify-start text-5xl text-secondary font-abril-display"
            style={textStyle}
          >
            <div className="relative leading-[36px] font-semibold">
              {drinkName}
            </div>
            <div className="w-[302px] relative text-sm tracking-[0.01em] leading-[24px] font-value-sans-pro inline-block opacity-[0.7]">
              There are many variations of passages Lorem Ipsum form
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemsContainer;
