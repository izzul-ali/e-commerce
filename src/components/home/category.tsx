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
        <button className="p-3 bg-violet-400/50 rounded-lg flex justify-center items-center">
          <BiTrendingUp className="w-5 h-fit fill-violet-800" />
        </button>
        <p>Trend</p>
      </div>
      <div>
        <button className="p-3 bg-orange-400/30 rounded-lg flex justify-center items-center">
          <BiHealth className="w-5 h-fit fill-orange-400" />
        </button>
        <p>Kesehatan</p>
      </div>
      <div>
        <button className="p-3 bg-sky-400/30 rounded-lg flex justify-center items-center">
          <MdDevicesOther className="w-5 h-fit fill-sky-600" />
        </button>
        <p>Teknologi</p>
      </div>
      <div>
        <button className="p-3 bg-lime-400/30 rounded-lg flex justify-center items-center">
          <GiShirt className="w-5 h-fit fill-lime-600" />
        </button>
        <p>Fashion</p>
      </div>
    </div>
  )
}
