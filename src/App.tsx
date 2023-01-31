import { useState } from 'react'

import { Header } from './components/Header'
import { Introduction } from './components/Introduction'
import { CustomSearch } from './components/CustomSearch'
import { CardList } from './components/CardList'

export function App() {
  return (
    <div className="bg-base-background">
      {/* primeiro monto o fixo, dps o header vai pro layout component */}
      <Header />

      <div className="flex flex-col w-[90%] md:w-[70%] xl:w-[55%] m-auto pb-32">
        <Introduction />

        <CustomSearch />

        <CardList />
      </div>
    </div>
  )
}
