import { createContext, ReactNode, useState } from 'react'

interface IssueProps {
  url: string
  repository_url: string
  html_url: string
  id: number
  number: number
  title: string
  state: string
  created_at: string
  updated_at: string
  body: string
}

interface IssuesProps {
  incomplete_results: boolean
  total_count: number
  items: IssueProps[]
}

interface IssueContext {
  issues: IssuesProps | null
  setIssues: (issues: IssuesProps) => void
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContext)

export function IssueProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<IssuesProps | null>(null)

  return (
    <IssueContext.Provider value={{ issues, setIssues }}>
      {children}
    </IssueContext.Provider>
  )
}
