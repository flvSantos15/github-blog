import React from 'react'

import logoImg from '../assets/logo.svg'
import leftImg from '../assets/effect-left.png'
import rightImg from '../assets/effect-right.png'

export function Header() {
  return (
    <div className="flex items-center justify-center md:justify-between xl:justify-between absolute w-full h-[120px] md:h-[276px] xl:h-[296px] bg-base-profile">
      {/* <div className="flex justify-between absolute xl:max-w-[1440px] xl:h-[296px] bg-base-profile"> */}
      <img
        src={rightImg}
        alt=""
        className="hidden md:flex xl:flex md:w-[270px] xl:w-[409px]"
      />
      <img
        src={logoImg}
        alt=""
        className="w-[98px] md:w-[128px] xl:w-[148px] md:h-[78px] xl:h-[98px]"
      />
      <img
        src={leftImg}
        alt=""
        className="hidden md:flex xl:flex md:w-[271px] xl:w-[371px]"
      />
      {/* </div> */}
    </div>
  )
}
