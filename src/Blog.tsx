import { Introduction } from './components/Introduction'
import { CustomSearch } from './components/CustomSearch'
import { CardList } from './components/CardList'

export function Blog() {
  return (
    <div className="flex flex-col w-[90%] md:w-[70%] xl:w-[55%] m-auto pb-32">
      <Introduction />

      <CustomSearch />

      <CardList />
    </div>
  )
}
