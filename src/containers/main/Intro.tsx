import IntroDuck from '@/containers/main/IntroDuck'
import Title from '@/containers/main/Title'

export default function Intro() {
  return (
    <div className="text-center">
      <div>
        <div className="pt-[120px] inline-block">
          <Title />
        </div>
      </div>
      <div>
        <div className="pt-[250px] inline-block">
          <IntroDuck />
        </div>
      </div>
    </div>
  )
}
