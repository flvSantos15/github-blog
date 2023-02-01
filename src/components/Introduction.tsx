import { useEffect, useState } from 'react'

import { CustomLink } from './CustomLink'
import { IntroductionSocial } from './IntroductionSocial'

import { AiFillGithub } from 'react-icons/ai'
import { HiOfficeBuilding } from 'react-icons/hi'
import { FaUserFriends } from 'react-icons/fa'
import { api } from '../lib/api'

interface User {
  login: string
  id: number
  avatar_url: string
  url: string //"https://api.github.com/users/flvSantos15",
  html_url: string // "https://github.com/flvSantos15",
  name: string
  company: null
  location: string
  email: null
  hireable: true
  bio: string
  followers: number
  // "repos_url": "https://api.github.com/users/flvSantos15/repos",
  // "type": "User",
  // "blog": "https://www.linkedin.com/in/flvSantos15/",
}

export function Introduction() {
  const [user, setUser] = useState<User | null>(null)
  const userName = 'flvSantos15'

  const getUserInformation = async () => {
    const { data } = await api.get(`/users/${userName}`)

    setUser(data)
  }

  useEffect(() => {
    getUserInformation()
  }, [])

  return (
    <div className="flex flex-col md:flex-row xl:flex-row gap-8 w-full m-auto mb-[72px] py-4 px-5 xl:py-8 xl:px-10 -mt-[80px] bg-base-profile shadow-[0px_2px_28px_rgba(0,0,0,0.2)] rounded-[10px]">
      <div className="flex w-[140px] md:w-[128px] xl:w-[148px] xl:h-[148px] rounded-lg overflow-hidden">
        <img src={user?.avatar_url} alt="" />
      </div>
      <div className="flex flex-col xl:w-[75%] gap-2">
        <div className="flex flex-col md:flex-row xl:flex-row gap-1 md:justify-between xl:justify-between xl:w-full">
          <h1 className="font-['Nunito'] font-bold text-2xl leading-[31px] text-base-title">
            {user?.name}
          </h1>
          <CustomLink label="Github" url={String(user?.html_url)} />
        </div>
        <p className="flex justify-self-center font-['Nunito'] font-normal text-base leading-[26px] text-base-text">
          {user?.bio}
        </p>
        <div className="flex flex-col md:flex-row xl:flex-row items-start md:items-center xl:items-center p-0 gap-2 md:gap-6 xl:gap-6 xl:w-[393px] xl:h-[26px]">
          <IntroductionSocial
            label={String(user?.login)}
            icon={<AiFillGithub size="1.5rem" className="text-base-label" />}
          />
          {user?.company && (
            <IntroductionSocial
              label={String(user?.company).split(' ')[0]}
              icon={
                <HiOfficeBuilding size="1.5rem" className="text-base-label" />
              }
            />
          )}
          <IntroductionSocial
            label={String(
              Number(user?.followers) > 1
                ? `${user?.followers} seguidores`
                : `${user?.followers} seguidor`
            )}
            icon={<FaUserFriends size="1.5rem" className="text-base-label" />}
          />
        </div>
      </div>
    </div>
  )
}
