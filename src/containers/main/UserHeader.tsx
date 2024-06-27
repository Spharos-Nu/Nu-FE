import UserDuckPoint from './UserDuckPoint'
import UserProfile from './UserProfile'

export default function UserHeader({
  duckPointData,
}: {
  duckPointData: number
}) {
  return (
    <div className="flex justify-between pt-[30px] px-[20px]">
      <UserProfile />
      <div className="content-center">
        {duckPointData !== -1 && (
          <UserDuckPoint duckPointData={duckPointData} />
        )}
      </div>
    </div>
  )
}
