import Image from 'next/image'
import Link from 'next/link'

export default function UserProfile() {
  return (
    <Link href="/login" className="flex">
      <Image
        src={`https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/basicImage.png`}
        alt="profile"
        width={50}
        height={50}
        className="rounded-full aspect-square"
      />
      <div className="pl-[20px] content-center items-center">
        <p className="text-[18px]">로그인 하러가기!</p>
      </div>
    </Link>
  )
}
