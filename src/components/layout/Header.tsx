import SearchVisible from '@/containers/search/SearchVisible'
import CategorySelection from '../../containers/category/CategorySelection'

export default function Header() {
  return (
    <header className="static flex justify-between h-[50px] leading-[50px]">
      <div className="flex h-[50px]">
        <h1 className="pl-[20px]">Home</h1>
        <CategorySelection />
      </div>
      <SearchVisible />
    </header>
  )
}
