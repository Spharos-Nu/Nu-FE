import CategorySelection from '@/containers/category/CategorySelection'
import NotificationVisible from '@/containers/notification/NotificationVisible'
import SearchVisible from '@/containers/search/SearchVisible'
import Logo from '@/public/svgs/header/logo.svg'

export default function Header() {
  return (
    <header className="static my-[15px] flex justify-between leading-[50px]">
      <div className="flex h-[50px]">
        <h1 className="pl-[20px]">
          <Logo />
        </h1>
        <CategorySelection />
      </div>
      <div className="flex justify-between">
        <NotificationVisible />
        <SearchVisible />
      </div>
    </header>
  )
}
