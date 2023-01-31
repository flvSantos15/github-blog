import React from 'react'

import { CustomLink } from './CustomLink'
import { IntroductionSocial } from './IntroductionSocial'

import { AiFillGithub } from 'react-icons/ai'
import { HiOfficeBuilding } from 'react-icons/hi'
import { FaUserFriends } from 'react-icons/fa'

export function Introduction() {
  return (
    <div className="flex gap-8 m-auto mb-[72px] py-8 px-10 -mt-[80px] xl:h-[212px] bg-base-profile shadow-[0px_2px_28px_rgba(0,0,0,0.2)] rounded-[10px]">
      <div className="flex border border-solid border-[red] xl:w-[148px] xl:h-[148px] rounded-lg"></div>
      <div className="flex flex-col xl:w-[75%] gap-5">
        <div className="flex justify-between xl:w-full">
          <h1 className="font-['Nunito'] font-bold text-2xl leading-[31px] text-base-title">
            Cameron Williamson
          </h1>
          <CustomLink label="Github" />
        </div>
        <p className="font-['Nunito'] font-normal text-base leading-[26px] text-base-text">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="flex items-center p-0 gap-6 xl:w-[393px] xl:h-[26px]">
          <IntroductionSocial
            label="cameron"
            icon={<AiFillGithub size="1.5rem" className="text-base-label" />}
          />
          <IntroductionSocial
            label="Rocketseat"
            icon={
              <HiOfficeBuilding size="1.5rem" className="text-base-label" />
            }
          />
          <IntroductionSocial
            label="32 seguidores"
            icon={<FaUserFriends size="1.5rem" className="text-base-label" />}
          />
        </div>
      </div>
    </div>
  )
}
