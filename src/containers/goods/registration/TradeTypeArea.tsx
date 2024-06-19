import { useGoodsStore } from '@/containers/goods/registration/store'

export default function TradeTypeArea() {
  const { wishTradeType, setTradeType } = useGoodsStore()

  const trade = [
    {
      id: '0',
      name: '직거래',
    },
    {
      id: '1',
      name: '택배거래',
    },
    {
      id: '2',
      name: '둘 다 좋아요',
    },
  ]

  return (
    <>
      <p className="text-sky-600 text-[17px]">선호하는 거래 방법</p>
      <div className="flex flex-row justify-between mb-[20px]">
        {trade.map((item) => (
          <button
            type="button"
            onClick={() => setTradeType(item.id)}
            key={item.id}
            className={`w-1/3 h-[45px] mt-[5px] border rounded-full mr-[10px] last:mr-0 content-center text-center text-[15px]
            ${wishTradeType === item.id ? ' bg-[#FFD26F] border-[#FFD26F] text-white' : ' border-[#d4d4d4] bg-white text-[#d4d4d4]'}`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  )
}
