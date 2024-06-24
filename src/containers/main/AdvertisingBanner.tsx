'use client'

import Image from 'next/image'
import SwiperCore from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Banner2 from '@/dummydata/banner2.png'
import { BannerType } from '@/types/mainType'
import '@/styles/swiper.css'

export default function AdvertisingBanner() {
  SwiperCore.use([Navigation, Autoplay])

  const banner = [
    {
      id: 1,
      url: '/src/dummydata/banner1.png',
    },
    {
      id: 2,
      url: '/dummydata/banner2.png',
    },
    {
      id: 3,
      url: '/dummydata/banner3.png',
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
        {banner.map((item: BannerType) => (
          <SwiperSlide key={item.id}>
            <Image
              src={Banner2}
              alt="배너 이미지"
              width={600}
              height={600}
              className="rounded-3xl m-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
