export default function ProductCardLoading() {
  return (
    <div className="h-[19rem] sm:h-[20rem] shadow-md w-full border border-gray-300 hover:border-violet-500 transition duration-300 rounded-md overflow-hidden">
      <div className="w-full h-44 object-contain rounded-t bg-gray-300 animate-pulse"></div>
      <div className="p-2 space-y-3">
        <h3 className="text-sm sm:text-base font-medium line-clamp-2 py-2 px-6 rounded bg-gray-300 animate-pulse"></h3>
        <h3 className="text-sm sm:text-base font-medium line-clamp-2 py-2 px-6 rounded bg-gray-300 animate-pulse"></h3>
        <p className="text-xs bg-gray-300 animate-pulse py-2 px-6  w-fit rounded-md"></p>
        <div className="flex justify-between items-center ">
          <p className="font-medium px-6 py-2 bg-gray-300 animate-pulse rounded"></p>
          <p className="px-6 py-2 bg-gray-300 animate-pulse rounded"></p>
        </div>
      </div>
    </div>
  )
}
