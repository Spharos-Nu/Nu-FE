import Link from 'next/link'
import AllGoods from '@/../public/svgs/nav/allGoods.svg'
import Chat from '@/../public/svgs/nav/chat.svg'
import Home from '@/../public/svgs/nav/home.svg'
import Like from '@/../public/svgs/nav/like.svg'
import Mypage from '@/../public/svgs/nav/mypage.svg'

export default function Nav() {
  return (
    <div className="w-full">
      <div className="fixed grid grid-cols-5 bottom-0 bg-white h-[45px] w-full tracking-[-0.05rem] text-[13px]">
        <div className="text-center">
          <Link href="/">
            <div className="inline-block">
              <Home />
            </div>
            <div>홈</div>
          </Link>
        </div>
        <div className="text-center">
          <Link href="/">
            <div className="inline-block">
              <AllGoods />
            </div>
            <div>전체</div>
          </Link>
        </div>
        <div className="text-center">
          <Link href="/">
            <div className="inline-block">
              <Like />
            </div>
            <div>관심</div>
          </Link>
        </div>
        <div className="text-center">
          <Link href="/">
            <div className="inline-block">
              <Chat />
            </div>
            <div>채팅</div>
          </Link>
        </div>
        <div className="text-center">
          <Link href="/">
            <div className="inline-block">
              <Mypage />
            </div>
            <div>내정보</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
