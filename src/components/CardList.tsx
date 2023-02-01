import { useContext } from 'react'
import { IssueContext } from '../context/issueContext'

import { CardItem } from './CardItem'

export function CardList() {
  const { issues } = useContext(IssueContext)

  return (
    <div className="grid xl:grid-cols-2 gap-8 mt-12">
      {issues?.items.map((issue) => {
        const updatedAt = new Date(issue?.updated_at)

        return (
          <CardItem
            key={issue.id}
            title={issue.title}
            body={issue.body}
            updatedAt={updatedAt}
            number={issue.number}
          />
        )
      })}
    </div>
  )
}
