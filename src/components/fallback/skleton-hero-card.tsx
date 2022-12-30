export default function HeroCardLoading() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full h-32 px-1">
      <div className="rounded h-full w-full object-cover bg-gray-300 animate-pulse"></div>
      <div className="">
        <h3 className="text-lg mb-2 font-medium line-clamp-3 py-2 w-full bg-gray-300 animate-pulse rounded-sm"></h3>
        <h3 className="text-lg font-medium line-clamp-3 py-2 w-full bg-gray-300 animate-pulse rounded-sm"></h3>
        <button className="mt-5 px-5 py-2 rounded bg-gray-300 animate-pulse"></button>
      </div>
    </div>
  )
}
