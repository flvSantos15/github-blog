import React from 'react'

import logoImg from '../assets/logo.svg'
import leftImg from '../assets/effect-left.png'
import rightImg from '../assets/effect-right.png'

export function Header() {
  return (
    <div className="flex items-center justify-between absolute w-full xl:h-[296px] bg-base-profile">
      {/* <div className="flex justify-between absolute xl:max-w-[1440px] xl:h-[296px] bg-base-profile"> */}
      <img src={rightImg} alt="" />
      <img src={logoImg} alt="" className="w-[148px] h-[98px]" />
      <img src={leftImg} alt="" />
      {/* </div> */}
    </div>
  )
}
