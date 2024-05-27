'use client'

import Image from 'next/image'
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Banner2 from '@/dummydata/banner2.png'
import { BannerType } from '@/types/BannerType'

export default function AdvertisingBanner() {
  SwiperCore.use([Navigation])
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
        slidesPerView={1} // 보여질 슬라이드 수 - 소수도 가능
        loop // 슬라이드 루프
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }} // 참고자료에 autoplay 사용할 때 예시 있음
        navigation={false}
        className=""
      >
        {banner.map((item: BannerType) => (
          <SwiperSlide key={item.id} className="">
            <Image
              src={Banner2}
              alt=""
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
