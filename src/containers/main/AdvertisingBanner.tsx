'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SwiperCore from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BannerType } from '@/types/mainType'
import '@/styles/swiper.css'

export default function AdvertisingBanner() {
  const pathname = usePathname()
  SwiperCore.use([Navigation, Autoplay])

  const rootUrl = 'http://localhost:3000'

  const bannerBaseball = [
    {
      id: 1,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-baseball1.png`,
      url: `${rootUrl}/mypage/notice`,
    },
    {
      id: 2,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-baseball2.png`,
      url: `${rootUrl}/mypage/notice`,
    },
    {
      id: 3,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-nextCategory.png`,
      url: `${rootUrl}/mypage/notice`,
    },
    {
      id: 4,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-notice2.png`,
      url: `${rootUrl}/mypage/notice`,
    },
    {
      id: 5,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-baseball3.png`,
      url: `${rootUrl}/mypage/notice`,
    },
  ]

  const bannerIdol = [
    {
      id: 1,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-idol1.jpg`,
      url: `${rootUrl}/mypage/notice`,
    },
    {
      id: 2,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-idol2.png`,
      url: `${rootUrl}/mypage/notice`,
    },
    {
      id: 3,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-nextCategory.png`,
      url: `${rootUrl}/mypage/notice`,
    },
    {
      id: 4,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-notice2.png`,
      url: `${rootUrl}/mypage/notice`,
    },
  ]

  const bannerAnimation = [
    {
      id: 1,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-animation1.png`,
      url: `${rootUrl}/mypage/notice`,
    },
    {
      id: 2,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-nextCategory.png`,
      url: `${rootUrl}/mypage/notice`,
    },
    {
      id: 3,
      image: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/banner-notice2.png`,
      url: `${rootUrl}/mypage/notice`,
    },
  ]

  return (
    <div className="pt-[20px] px-[20px] pb-[25px]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        className=""
      >
        {pathname === '/animation' && (
          <>
            {bannerAnimation.map((item: BannerType) => (
              <SwiperSlide key={item.id}>
                <Link href={item.url}>
                  <Image
                    src={item.image}
                    alt="배너 이미지"
                    width={600}
                    height={600}
                    className="rounded-3xl m-auto aspect-square object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </>
        )}
        {pathname === '/baseball' && (
          <>
            {bannerBaseball.map((item: BannerType) => (
              <SwiperSlide key={item.id}>
                <Image
                  src={item.image}
                  alt="배너 이미지"
                  width={600}
                  height={600}
                  className="rounded-3xl m-auto aspect-square object-cover"
                />
              </SwiperSlide>
            ))}
          </>
        )}
        {pathname === '/idol' && (
          <>
            {bannerIdol.map((item: BannerType) => (
              <SwiperSlide key={item.id}>
                <Image
                  src={item.image}
                  alt="배너 이미지"
                  width={600}
                  height={600}
                  className="rounded-3xl m-auto aspect-square object-cover"
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  )
}
