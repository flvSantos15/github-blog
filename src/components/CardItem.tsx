import { NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface CardItemProps {
  title: string
  updatedAt: Date
  body: string
  number: number
}

export function CardItem({ title, body, updatedAt, number }: CardItemProps) {
  const publisheDateformatted = format(updatedAt, "d 'de' LLL 'ás' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(updatedAt, {
    locale: ptBR,
    addSuffix: true
  })
  return (
    <NavLink to={`/post/${number}`} title="post">
      <div className="flex flex-col p-5 gap-3 max-w-[416px] max-h-[260px] bg-base-post rounded-[10px] border-2 border-transparent hover:border-2 hover:border-solid hover:border-base-label cursor-pointer">
        <div className="flex flex-col-reverse gap-1 justify-between w-full">
          <div className="w-full">
            <h2 className="font-['Nunito'] font-bold text-xl leading-7 text-base-title">
              {title}
            </h2>
          </div>
          <div className="flex justify-end">
            <time
              title={publisheDateformatted}
              dateTime={updatedAt.toISOString()}
              className="font-['Nunito'] font-normal text-sm leading-[20px] text-base-span"
            >
              {publishedDateRelativeToNow}
            </time>
          </div>
        </div>
        <div className="truncate overflow-hidden">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="font-['Nunito'] font-normal text-base leading-[26px] text-base-text truncate overflow-hidden"
          >
            {body}
          </ReactMarkdown>
        </div>
      </div>
    </NavLink>
  )
}
