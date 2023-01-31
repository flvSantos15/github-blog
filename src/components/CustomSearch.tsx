import { useEffect } from 'react'

import { api } from '../services/api'

import { CustomInput } from './CustomInput'

export function CustomSearch() {
  // q=${texto}%20repo:${username}/${repo}
  const parameter =
    'Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge'

  const handleSearchIssues = async () => {
    const { data } = await api.get(`search/issues?q=${parameter}`)
  }

  useEffect(() => {
    // handleSearchIssues()
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="font-['Nunito'] font-bold text-[18px] leading-[29px] text-base-subtitle">
          Publicações
        </h2>
        <span className="font-['Nunito'] font-normal text-sm leading-[22px] text-right text-base-span">
          6 publicações
        </span>
      </div>
      <CustomInput />
    </div>
  )
}
