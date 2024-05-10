import React, { useState } from "react";

const ServideCard = ({ id, title, content, color }) => {
  let [cardHover, setCardHober] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setCardHober(true);
      }}
      onMouseLeave={() => setCardHober(false)}
      key={id}
      className={`hover:border-[2px]  ${
        cardHover
          ? id === 1
            ? "border-[#01C99B]"
            : id === 2
            ? "border-[#3FBDF1]"
            : id === 3
            ? "border-[#FF605F]"
            : "border-[#FF9F31]"
          : " border-[#6D7578]"
      } rounded-md dark:bg-[#1B1C1E] p-3 m-[20px] w-[520px] h-[350px]`}
    >
      <div className=" flex justify-items-center items-center">
        <div className=" flex relative">
          <h1 className=" text-[88px] font-semibold text-[#6D7578]">{0}</h1>
          <h1
            className={`text-[88px] font-semibold  ${
              cardHover
                ? id === 1
                  ? "text-[#01C99B]"
                  : id === 2
                  ? "text-[#3FBDF1]"
                  : id === 3
                  ? "text-[#FF605F]"
                  : "text-[#FF9F31]"
                : " text-[#6D7578]"
            }`}
          >
            {id}
          </h1>
        </div>
        <h1
          className={`text-[32px] font-semibold transition-all duration-300 absolute ${
            cardHover ? "ml-[100px]" : "ml-[75px]"
          } ${cardHover ? "text-[#6D7578]" : `text-[${color}]`} `}
        >
          {title}
        </h1>
      </div>
      <p className=" text-[18px] font-semibold text-[#6D7578]">{content}</p>
    </div>
  );
};

export default ServideCard;
