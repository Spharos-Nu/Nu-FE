import Link from 'next/link'

export default function JoinSuccessModal() {
  return (
    <>
      <div>
        <p>가입을 축하합니다. 👍</p>
        <p>Welcome{'\n'}Goods-Goods-Duck</p>
      </div>
      <Link href="/login" className="rounded-3xl bg-sky-600 text-white">
        로그인 페이지로
      </Link>
    </>
  )
}
