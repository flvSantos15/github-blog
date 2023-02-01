import { NavLink, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { AiFillGithub } from 'react-icons/ai'
import { FaCalendarDay, FaComment } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'

import { CustomLink } from './components/CustomLink'
import { IntroductionSocial } from './components/IntroductionSocial'
import { useEffect, useState } from 'react'
import { api } from './lib/api'

interface IssueProps {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  html_url: string
  id: number
  number: number
  title: string
  user: {
    login: string
    id: number
  }
  state: string
  comments: number
  created_at: string
  updated_at: string
  body: string
}

export function Post() {
  const { issue } = useParams()
  const [issueState, setIssueState] = useState<IssueProps | null>(null)

  const handleGetIssue = async () => {
    //
    const { data } = await api.get(
      `/repos/flvSantos15/github-blog/issues/${issue}`
    )

    setIssueState(data)
  }

  useEffect(() => {
    if (issue) {
      handleGetIssue()
    }
  }, [issue])

  console.log(issueState)

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(issueState?.updated_at as string),
    {
      locale: ptBR,
      addSuffix: true
    }
  )

  return (
    <div className="flex flex-col w-[90%] md:w-[70%] xl:w-[55%] m-auto pb-32">
      <div className="flex flex-col md:flex-row xl:flex-row gap-8 w-full m-auto mb-[72px] py-4 px-5 xl:py-8 xl:px-10 -mt-[14px] md:-mt-[60px] xl:-mt-[80px] bg-base-profile shadow-[0px_2px_28px_rgba(0,0,0,0.2)] rounded-[10px]">
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-1 justify-between xl:w-full">
            <NavLink to="/">
              <div className="flex items-center p-0 gap-2">
                <IoIosArrowBack color="#3294F8" />
                <p className="font-['Nunito'] font-bold text-xs leading-[19px] text-blue uppercase">
                  Voltar
                </p>
              </div>
            </NavLink>
            <CustomLink
              label="Ver no Github"
              url={String(issueState?.html_url)}
            />
          </div>
          <p className="font-['Nunito'] font-normal text-2xl leading-[31px] text-base-title">
            {issueState?.title}
          </p>
          <div className="flex flex-col md:flex-row xl:flex-row items-start md:items-center xl:items-center p-0 gap-2 md:gap-6 xl:gap-6 xl:w-full xl:h-[26px]">
            <IntroductionSocial
              label={String(issueState?.user?.login)}
              icon={<AiFillGithub size="1.5rem" className="text-base-label" />}
            />

            <IntroductionSocial
              label={publishedDateRelativeToNow}
              icon={<FaCalendarDay size="1.5rem" className="text-base-label" />}
            />

            {Number(issueState?.comments) > 0 ? (
              <IntroductionSocial
                label={String(
                  Number(issueState?.comments) > 1
                    ? `${issueState?.comments} comentários`
                    : `${issueState?.comments} comentário`
                )}
                icon={<FaComment size="1.5rem" className="text-base-label" />}
              />
            ) : null}
          </div>
        </div>
      </div>

      <div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="font-['Nunito'] font-bold text-base leading-[26px] text-base-text"
        >
          {String(issueState?.body)}
        </ReactMarkdown>
      </div>
    </div>
  )
}
