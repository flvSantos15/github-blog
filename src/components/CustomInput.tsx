import React from 'react'

export function CustomInput() {
  return (
    <input
      type="text"
      placeholder="Buscar conteúdo"
      className="flex items-center py-3 px-4 gap-2 bg-base-input border border-solid border-base-border rounded-md font-['Nunito'] font-normal text-base leading-6 text-base-label focus:border-blue active:text-base-text"
    />
  )
}
