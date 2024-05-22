'use client'

// eslint-disable-next-line import/no-cycle

import { KeywordType } from '@/types/KeywordType'
import Remove from '@/../public/svgs/icon/remove.svg'

export default function RecentSearch({
  keywords,
  handleRemoveKeyword,
  handleClearKeywords,
}: {
  keywords: KeywordType[]
  handleRemoveKeyword: (id: number) => void
  handleClearKeywords: () => void
}) {
  return (
    <>
      <div className="px-[20px] flex justify-between">
        <h2 className="text-[17px]">최근 검색어</h2>
        <div
          className="text-[15px]"
          role="none"
          onClick={() => handleClearKeywords()}
        >
          전체삭제
        </div>
      </div>
      <div className="flex w-full overflow-x-auto whitespace-nowrap">
        {keywords.map((item: KeywordType) => (
          <div
            key={item.id}
            role="none"
            className="text-[13px] border border-gray-300 rounded-[20px] px-[8px] ml-[12px] mt-[5px] inline-block cursor-pointer"
          >
            <div className="flex">
              <div>{item.text}</div>
              <div
                className="place-self-center pl-[8px]"
                role="none"
                onClick={() => handleRemoveKeyword(item.id)}
              >
                <Remove />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
