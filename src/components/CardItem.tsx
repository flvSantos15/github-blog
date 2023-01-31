import React from 'react'

export function CardItem() {
  return (
    <div className="flex flex-col max-w-[416px] max-h-[260px] bg-base-post rounded-[10px] border-2 border-transparent hover:border-2 hover:border-solid hover:border-base-label cursor-pointer p-7 gap-2">
      <div className="flex justify-between w-full">
        <div className="w-[75%]">
          <h2 className="font-['Nunito'] font-bold text-xl leading-8 text-base-title">
            JavaScript data types and data structures
          </h2>
        </div>
        <div>
          <span className="font-['Nunito'] font-normal text-sm leading-[22px] text-base-span">
            Há 1 dia
          </span>
        </div>
      </div>
      <div className="overflow-hidden min-h-[125px]">
        <p className="font-['Nunito'] font-normal text-base leading-[26px] text-base-text">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </div>
    </div>
  )
}
