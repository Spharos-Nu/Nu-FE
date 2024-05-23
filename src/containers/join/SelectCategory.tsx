import { IoIosArrowDown } from 'react-icons/io'
import { useFirstStore } from '@/containers/join/store'

export default function SelectCategory() {
  const { favoriteCategory, setFavoriteCategory, favoriteCategoryOptions } =
    useFirstStore()

  return (
    <div className="w-full h-14 rounded-3xl">
      <span
        className="flex relative w-full h-full"
        aria-label="favoriteCategory"
      >
        <select
          id="favoriteCategory"
          value={favoriteCategory}
          onChange={(e) => setFavoriteCategory(e.target.value)}
          className="w-full h-full rounded-3xl bg-gray-200 pl-5 text-sm focus:border-[3px] focus:border-sky-600"
        >
          {/* Todo: select option 커스텀 */}
          <option value="" disabled>
            관심 카테고리를 선택해주세요.
          </option>
          {favoriteCategoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <IoIosArrowDown className="absolute right-5 top-4 text-sky-600 pointer-events-none" />
      </span>
    </div>
  )
}
