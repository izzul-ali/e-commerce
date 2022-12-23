type HeroCard = {
  img: string
  title: string
  description: string
}

export default function HeroCard() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full h-32 px-1">
      <img
        src="/bg.jpg"
        alt="hero"
        className="rounded h-full w-full object-cover"
      />
      <div className="space-y-3">
        <h3 className="text-lg font-medium line-clamp-3">
          Special of Limited Edition
        </h3>
        <button
          aria-label="btn-buy-now"
          className="text-xs px-3 py-1 outline-none rounded bg-gray-700 hover:bg-gray-800 text-white"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
