import { ReactElement } from 'react'

interface IntroductionSocialProps {
  icon: ReactElement
  label: string
}

export function IntroductionSocial({ label, icon }: IntroductionSocialProps) {
  return (
    <div className="flex items-center p-0 gap-2">
      <>{icon}</>
      <span className="font-['Nunito'] font-normal text-base leading-[26px] text-base-subtitle">
        {label}
      </span>
    </div>
  )
}
