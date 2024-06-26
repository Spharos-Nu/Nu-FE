import UserDuckPoint from './UserDuckPoint'
import UserProfile from './UserProfile'

export default function UserHeader() {
  return (
    <div className="flex justify-between pt-[30px] px-[20px]">
      <UserProfile />
      <div className="content-center">
        <UserDuckPoint />
      </div>
    </div>
  )
}
