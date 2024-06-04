import reviewList from '@/dummydata/sellerReview.json'

export default function SellerReview() {
  const data = reviewList.sellerReview

  return (
    <div className="mt-[20px] mx-[20px] mb-[20px] px-[25px] pt-[15px] pb-[25px] bg-[#f7f7f7] rounded-2xl">
      <p className="text-[15px] text-[#818181]">거래 후기</p>
      {data.length > 0 ? (
        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="mt-[20px] pb-[20px] border-b last:border-none last:pb-0"
            >
              <p className="mt-[10px] text-[15px]">{item.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-[20px] text-center text-[20px]">
          거래 후기가 없습니다.
        </div>
      )}
    </div>
  )
}
