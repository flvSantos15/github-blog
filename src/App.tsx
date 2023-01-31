import { useState } from 'react'
import { CardItem } from './components/CardItem'

import { CustomInput } from './components/CustomInput'
import { CustomSearch } from './components/CustomSearch'
import { Header } from './components/Header'
import { Introduction } from './components/Introduction'

export function App() {
  return (
    <div>
      {/* primeiro monto o fixo, dps o header vai pro layout component */}
      <Header />

      {/* preciso criar um container */}
      <div className="flex flex-col w-[90%] md:w-[70%] xl:w-[55%] m-auto">
        <Introduction />

        <CustomSearch />
      </div>
    </div>
  )
}
