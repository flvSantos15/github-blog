import { useState } from 'react'
import { CardItem } from './components/CardItem'

import { CustomInput } from './components/CustomInput'
import { Header } from './components/Header'
import { Introduction } from './components/Introduction'

export function App() {
  return (
    <div>
      {/* primeiro monto o fixo, dps o header vai pro layout component */}
      <Header />

      <Introduction />
    </div>
  )
}
