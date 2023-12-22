/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const Tabs = ({
  property1,
  className,
  lineClassName,
  line = "https://c.animaapp.com/bseuTgIr/img/line-21-34.svg",
  lineClassNameOverride,
  img = "https://c.animaapp.com/bseuTgIr/img/line-21-34.svg",
  imgClassName,
  line1 = "https://c.animaapp.com/bseuTgIr/img/line-21-34.svg",
  imgClassNameOverride,
  line2 = "https://c.animaapp.com/bseuTgIr/img/line-21-34.svg",
  lineClassName1,
  line3 = "https://c.animaapp.com/bseuTgIr/img/line-21-34.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`inline-flex items-start gap-[64px] relative ${className}`}>
      <div
        className="w-[52px] h-[24px] relative"
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
      >
        {["default", "variant-3", "variant-4", "variant-5", "variant-6"].includes(state.property1) && (
          <>
            <div className="w-[52px] left-0 top-0 h-[24px] absolute">
              <div className="[font-family:'Simplon_Norm-Bold',Helvetica] left-0 tracking-[1.00px] text-[20px] -top-px text-texttext absolute h-[24px] font-bold whitespace-nowrap leading-[normal]">
                SHOP
              </div>
            </div>
            <img
              className={`w-px left-[-4845px] object-cover h-px absolute ${
                state.property1 === "variant-3"
                  ? "top-[-10519px]"
                  : state.property1 === "variant-4"
                  ? "top-[-10603px]"
                  : state.property1 === "variant-5"
                  ? "top-[-10687px]"
                  : state.property1 === "variant-6"
                  ? "top-[-10771px]"
                  : "top-[-10351px]"
              } ${lineClassName}`}
              alt="Line"
              src={line}
            />
          </>
        )}

        {state.property1 === "variant-2" && (
          <div className="relative h-[24px]">
            <div className="absolute w-[52px] h-[24px] top-0 left-0">
              <div className="absolute h-[24px] -top-px left-0 [font-family:'Simplon_Norm-Bold',Helvetica] font-bold text-texttext text-[20px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
                SHOP
              </div>
            </div>
            <img
              className="w-[52px] top-[23px] left-0 absolute h-px object-cover"
              alt="Line"
              src="https://c.animaapp.com/bseuTgIr/img/line-21-30.svg"
            />
          </div>
        )}
      </div>
      <div
        className="w-[65px] h-[24px] relative"
        onMouseLeave={() => {
          dispatch("mouse_leave_40");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_40");
        }}
      >
        {["default", "variant-2", "variant-4", "variant-5", "variant-6"].includes(state.property1) && (
          <>
            <div className="w-[65px] left-0 top-0 h-[24px] absolute">
              <div className="[font-family:'Simplon_Norm-Bold',Helvetica] left-0 tracking-[1.00px] text-[20px] -top-px text-texttext absolute h-[24px] font-bold whitespace-nowrap leading-[normal]">
                SKILLS
              </div>
            </div>
            <img
              className={`w-px left-[-4961px] object-cover h-px absolute ${
                state.property1 === "variant-2"
                  ? "top-[-10435px]"
                  : state.property1 === "variant-4"
                  ? "top-[-10603px]"
                  : state.property1 === "variant-5"
                  ? "top-[-10687px]"
                  : state.property1 === "variant-6"
                  ? "top-[-10771px]"
                  : "top-[-10351px]"
              } ${lineClassNameOverride}`}
              alt="Line"
              src={img}
            />
          </>
        )}

        {state.property1 === "variant-3" && (
          <div className="relative h-[24px]">
            <div className="absolute w-[65px] h-[24px] top-0 left-0">
              <div className="absolute h-[24px] -top-px left-0 [font-family:'Simplon_Norm-Bold',Helvetica] font-bold text-texttext text-[20px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
                SKILLS
              </div>
            </div>
            <img
              className="w-[65px] top-[23px] left-0 absolute h-px object-cover"
              alt="Line"
              src="https://c.animaapp.com/bseuTgIr/img/line-21-24.svg"
            />
          </div>
        )}
      </div>
      <div
        className="w-[79px] h-[24px] relative"
        onMouseLeave={() => {
          dispatch("mouse_leave_43");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_43");
        }}
      >
        <div className="[font-family:'Simplon_Norm-Bold',Helvetica] left-0 tracking-[1.00px] text-[20px] -top-px text-texttext h-[24px] font-bold leading-[normal] whitespace-nowrap absolute">
          STORIES
        </div>
        <img
          className={`object-cover h-px absolute ${state.property1 === "variant-4" ? "w-[79px]" : "w-px"} ${
            state.property1 === "variant-4" ? "left-0" : "left-[-5090px]"
          } ${
            state.property1 === "variant-2"
              ? "top-[-10435px]"
              : state.property1 === "variant-3"
              ? "top-[-10519px]"
              : state.property1 === "variant-4"
              ? "top-[23px]"
              : state.property1 === "variant-5"
              ? "top-[-10687px]"
              : state.property1 === "variant-6"
              ? "top-[-10771px]"
              : "top-[-10351px]"
          } ${imgClassName}`}
          alt="Line"
          src={state.property1 === "variant-4" ? "https://c.animaapp.com/bseuTgIr/img/line-21-18.svg" : line1}
        />
      </div>
      <div
        className="w-[65px] h-[24px] relative"
        onMouseLeave={() => {
          dispatch("mouse_leave_46");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_46");
        }}
      >
        <div className="[font-family:'Simplon_Norm-Bold',Helvetica] left-0 tracking-[1.00px] text-[20px] -top-px text-texttext h-[24px] font-bold leading-[normal] whitespace-nowrap absolute">
          ABOUT
        </div>
        <img
          className={`object-cover h-px absolute ${state.property1 === "variant-5" ? "w-[65px]" : "w-px"} ${
            state.property1 === "variant-5" ? "left-0" : "left-[-5233px]"
          } ${
            state.property1 === "variant-2"
              ? "top-[-10435px]"
              : state.property1 === "variant-3"
              ? "top-[-10519px]"
              : state.property1 === "variant-4"
              ? "top-[-10603px]"
              : state.property1 === "variant-5"
              ? "top-[23px]"
              : state.property1 === "variant-6"
              ? "top-[-10771px]"
              : "top-[-10351px]"
          } ${imgClassNameOverride}`}
          alt="Line"
          src={state.property1 === "variant-5" ? "https://c.animaapp.com/bseuTgIr/img/line-21-24.svg" : line2}
        />
      </div>
      <div
        className="w-[119px] h-[24px] relative"
        onMouseLeave={() => {
          dispatch("mouse_leave_49");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_49");
        }}
      >
        <div className="[font-family:'Simplon_Norm-Bold',Helvetica] left-0 tracking-[1.00px] text-[20px] -top-px text-texttext h-[24px] font-bold leading-[normal] whitespace-nowrap absolute">
          CONTACT US
        </div>
        <img
          className={`object-cover h-px absolute ${state.property1 === "variant-6" ? "w-[119px]" : "w-px"} ${
            state.property1 === "variant-6" ? "left-0" : "left-[-5362px]"
          } ${
            state.property1 === "variant-2"
              ? "top-[-10435px]"
              : state.property1 === "variant-3"
              ? "top-[-10519px]"
              : state.property1 === "variant-4"
              ? "top-[-10603px]"
              : state.property1 === "variant-5"
              ? "top-[-10687px]"
              : state.property1 === "variant-6"
              ? "top-[23px]"
              : "top-[-10351px]"
          } ${lineClassName1}`}
          alt="Line"
          src={state.property1 === "variant-6" ? "https://c.animaapp.com/bseuTgIr/img/line-21-6.svg" : line3}
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "variant-2",
        };

      case "mouse_enter_40":
        return {
          property1: "variant-3",
        };

      case "mouse_enter_43":
        return {
          property1: "variant-4",
        };

      case "mouse_enter_46":
        return {
          property1: "variant-5",
        };

      case "mouse_enter_49":
        return {
          property1: "variant-6",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "mouse_enter_40":
        return {
          property1: "variant-3",
        };

      case "mouse_enter_43":
        return {
          property1: "variant-4",
        };

      case "mouse_enter_46":
        return {
          property1: "variant-5",
        };

      case "mouse_enter_49":
        return {
          property1: "variant-6",
        };
    }
  }

  if (state.property1 === "variant-3") {
    switch (action) {
      case "mouse_leave_40":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-4") {
    switch (action) {
      case "mouse_leave_43":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-5") {
    switch (action) {
      case "mouse_leave_46":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-6") {
    switch (action) {
      case "mouse_leave_49":
        return {
          property1: "variant-2",
        };
    }
  }

  return state;
}
