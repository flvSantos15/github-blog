import React from 'react'
import { NavLink } from 'react-router-dom'

import { FiExternalLink } from 'react-icons/fi'

interface CustomLinkProps {
  label: string
  url: string
}

export function CustomLink({ label, url }: CustomLinkProps) {
  return (
    <NavLink to={url}>
      <div className="flex items-center gap-1 p-0">
        <span className="font-['Nunito'] font-bold text-xs leadgin-[19px] uppercase text-blue hover:underline">
          {label}
        </span>
        <FiExternalLink color="#3294F8" />
      </div>
    </NavLink>
  )
}
