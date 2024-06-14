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
  // const swiperRef = useRef<SwiperCore>()

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
    <div className="px-[20px] pb-[25px]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1} // 보여질 슬라이드 수
        loop // 슬라이드 루프
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}
        navigation
        className=""
      >
        {banner.map((item: BannerType) => (
          <SwiperSlide key={item.id}>
            <Image
              src={Banner2}
              alt="배너 이미지"
              width={500}
              height={500}
              className="rounded-3xl m-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
