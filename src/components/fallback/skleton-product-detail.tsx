import { BiErrorCircle } from 'react-icons/bi'

export default function LoadingProductDetail({
  message
}: {
  message?: string
}) {
  return (
    <div className="mb-20">
      <div
        className={`${
          !message ? 'animate-pulse' : null
        } flex items-center gap-x-1 justify-center text-red-500 rounded w-full h-60 bg-gray-300 `}
      >
        {message && (
          <>
            <span>
              <BiErrorCircle className="w-5 h-fit" />
            </span>
            <p>{message}</p>
          </>
        )}
      </div>
      <div className="sm:px-3">
        <div className="flex justify-between items-center mt-5 sm:mt-10 w-full">
          <p className="text-xl font-medium w-16 rounded-sm animate-pulse py-3 bg-gray-300"></p>
          <div className="inline-flex gap-x-3 items-center justify-between animate-pulse">
            <span className="w-6 py-3 rounded-sm bg-gray-300"></span>
            <span className="w-6 py-3 rounded-sm bg-gray-300"></span>
          </div>
        </div>

        <h1 className="py-2 w-full animate-pulse bg-gray-300 mt-3 rounded-sm"></h1>
        <h1 className="py-2 w-full animate-pulse bg-gray-300 mt-3 rounded-sm"></h1>

        <p className="mt-5 bg-gray-300 py-2 w-10 animate-pulse rounded-sm"></p>

        <div className="space-y-2 mt-5">
          <h3>Description</h3>
          <p className="py-2 animate-pulse rounded-sm w-full bg-gray-300"> </p>
          <p className="py-2 animate-pulse rounded-sm w-full bg-gray-300"> </p>
          <p className="py-2 animate-pulse rounded-sm w-full bg-gray-300"> </p>
        </div>
      </div>
    </div>
  )
}
