import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { api } from '../lib/api'

import { IssueContext } from '../context/issueContext'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormType = z.infer<typeof searchFormSchema>

export function CustomInput() {
  const { setIssues } = useContext(IssueContext)

  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, reset } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearch = async ({ query }: SearchFormType) => {
    setIsLoading(true)
    try {
      const parameter = `${query}repo:flvSantos15/github-blog`

      const { data } = await api.get(`search/issues?q=${parameter}`)

      setIssues(data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder={isLoading ? 'Carregando...' : 'Buscar conteúdo'}
        className="flex items-center py-3 px-4 gap-2 w-full bg-base-input border border-solid border-base-border rounded-md font-['Nunito'] font-normal text-base leading-6 text-base-label focus:outline-none focus:border-blue focus:text-base-text"
        {...register('query')}
      />
    </form>
  )
}
