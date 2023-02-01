import { useContext } from 'react'
import { IssueContext } from '../context/issueContext'

import { CustomInput } from './CustomInput'

export function CustomSearch() {
  const { issues } = useContext(IssueContext)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="font-['Nunito'] font-bold text-[18px] leading-[29px] text-base-subtitle">
          Publicações
        </h2>
        {Number(issues?.total_count) > 0 ? (
          <span className="font-['Nunito'] font-normal text-sm leading-[22px] text-right text-base-span">
            {Number(issues?.total_count) > 1
              ? `${issues?.total_count} publicações`
              : `${issues?.total_count} publicação`}
          </span>
        ) : null}
      </div>
      <CustomInput />
    </div>
  )
}
