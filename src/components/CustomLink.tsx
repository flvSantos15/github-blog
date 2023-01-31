import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

interface CustomLinkProps {
  label: string
}

export function CustomLink({ label }: CustomLinkProps) {
  return (
    <div className="flex items-center gap-1 p-0">
      <span className="font-['Nunito'] font-bold text-xs leadgin-[19px] uppercase text-blue hover:underline">
        {label}
      </span>
      <FiExternalLink color="#3294F8" />
    </div>
  )
}
