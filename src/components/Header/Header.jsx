import React from "react";
import {Tabs} from "../Tabs/Tabs";

export const Header = () => {
  return (
    <div className="relative w-[1440px] h-[188px] bg-miscwhite border-b [border-bottom-style:solid] border-neutral-200">
      <img
        className="absolute w-[36px] h-[36px] top-[40px] left-[96px]"
        alt="Logo"
        src="https://c.animaapp.com/bseuTgIr/img/logo.png"
      />
      <Tabs
        className="!absolute !left-[402px] !top-[140px]"
        img="https://c.animaapp.com/bseuTgIr/img/line-21-5@2x.png"
        imgClassName="!left-[354px] !top-[143px]"
        imgClassNameOverride="!left-[211px] !top-[143px]"
        line="https://c.animaapp.com/bseuTgIr/img/line-21-5@2x.png"
        line1="https://c.animaapp.com/bseuTgIr/img/line-21-5@2x.png"
        line2="https://c.animaapp.com/bseuTgIr/img/line-21-5@2x.png"
        line3="https://c.animaapp.com/bseuTgIr/img/line-21-5@2x.png"
        lineClassName="!left-[599px] !top-[143px]"
        lineClassName1="!left-[82px] !top-[143px]"
        lineClassNameOverride="!left-[483px] !top-[143px]"
        property1="default"
      />
      <div className="inline-flex items-center justify-end gap-[24px] absolute top-[46px] left-[1100px]">
        <img
          className="relative w-[24px] h-[24px]"
          alt="Vuesax linear search"
          src="https://c.animaapp.com/bseuTgIr/img/vuesax-linear-search-normal.png"
        />
        <img
          className="relative w-[24px] h-[24px]"
          alt="Vuesax linear heart"
          src="https://c.animaapp.com/bseuTgIr/img/vuesax-linear-heart.svg"
        />
        <img
          className="relative w-[24px] h-[24px]"
          alt="Vuesax linear"
          src="https://c.animaapp.com/bseuTgIr/img/vuesax-linear-shopping-bag.svg"
        />
        <img
          className="relative w-[24px] h-[24px]"
          alt="Vuesax twotone"
          src="https://c.animaapp.com/bseuTgIr/img/vuesax-twotone-profile.svg"
        />
        <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
          <div className="relative w-fit [font-family:'Simplon_Norm-Bold',Helvetica] font-bold text-texttext text-[16px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
            ENG
          </div>
          <img
            className="relative w-[16px] h-[16px]"
            alt="Vuesax linear arrow"
            src="https://c.animaapp.com/bseuTgIr/img/vuesax-linear-arrow-left.svg"
          />
        </div>
      </div>
      <div className="absolute h-[44px] top-[35px] left-[667px] [font-family:'Inter',Helvetica] font-extrabold text-black text-[36px] tracking-[1.00px] leading-[normal]">
        LOGO
      </div>
    </div>
  );
};
