import NonUserHeader from './NonUserHeader'
import UserDuckPoint from './UserDuckPoint'
import UserProfile from './UserProfile'

export default function UserHeader({
  duckPointData,
}: {
  duckPointData: number
}) {
  return (
    <div className="flex justify-between pt-4 pl-6 pr-6">
      {duckPointData !== -1 ? <UserProfile /> : <NonUserHeader />}
      <div className="content-center">
        {duckPointData !== -1 && (
          <UserDuckPoint duckPointData={duckPointData} />
        )}
      </div>
    </div>
  )
}
