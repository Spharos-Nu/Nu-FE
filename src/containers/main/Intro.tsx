import IntroDuck from '@/../public/svgs/intro/introDuck.svg'
import Title from '@/../public/svgs/intro/title.svg'

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
