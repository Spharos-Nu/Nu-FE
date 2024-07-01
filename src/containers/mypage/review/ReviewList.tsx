'use client'

import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import { ReviewListType } from '@/types/etcApiDataType'
import { getReviewList } from '@/utils/etcApiActions'
import ReviewItem from './ReviewItem'

export default function ReviewList() {
  const [data, setData] = useState<ReviewListType | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const reviewData = data?.reviewList

  useEffect(() => {
    const fetchData = async () => {
      const res = await getReviewList(currentPage)
      if (res.status === 200) {
        setData(res.result)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  return !reviewData?.length ? (
    <div className="flex justify-center items-center text-xl">
      내역이 없습니다.
    </div>
  ) : (
    <>
      {reviewData.map((review) => (
        <ReviewItem
          key={review.reviewId}
          review={review}
          goodsCode={review.goodsCode}
        />
      ))}
      {data!.maxPage > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPage={data!.maxPage}
        />
      )}
    </>
  )
}
