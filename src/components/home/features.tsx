import { BiTrendingUp, BiHealth } from 'react-icons/bi'
import { MdDevicesOther } from 'react-icons/md'
import { GiShirt } from 'react-icons/gi'

export default function Features() {
  return (
    <div
      className="
    [&>div]:flex [&>div]:flex-col [&>div]:items-center
    [&>div>p]:text-gray-600 [&>div>p]:text-sm [&>div]:space-y-1 mt-10 flex items-center justify-evenly"
    >
      <div>
        <button className="p-3 bg-violet-400/50 rounded-lg flex justify-center items-center outline-none">
          <BiTrendingUp className="w-5 h-fit fill-violet-800" />
        </button>
        <p>Trends</p>
      </div>
      <div>
        <button className="p-3 bg-orange-400/30 rounded-lg flex justify-center items-center outline-none">
          <BiHealth className="w-5 h-fit fill-orange-400" />
        </button>
        <p>Health</p>
      </div>
      <div>
        <button className="p-3 bg-sky-400/30 rounded-lg flex justify-center items-center outline-none">
          <MdDevicesOther className="w-5 h-fit fill-sky-600" />
        </button>
        <p>Technology</p>
      </div>
      <div>
        <button className="p-3 bg-lime-400/30 rounded-lg flex justify-center items-center outline-none">
          <GiShirt className="w-5 h-fit fill-lime-600" />
        </button>
        <p>Fashion</p>
      </div>
    </div>
  )
}
