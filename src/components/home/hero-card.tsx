type HeroCard = {
  img: string
  title: string
}

export default function HeroCard({ img, title }: HeroCard) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full h-32 px-1">
      <img
        src={img}
        alt={title}
        className="rounded h-full w-2/3 md:w-1/3 mx-auto object-contain"
      />
      <div className="space-y-3">
        <h3 className="text-lg font-medium line-clamp-2">{title}</h3>
        <button
          aria-label="buy-now"
          className="text-xs px-3 py-1 rounded bg-gray-700 hover:bg-gray-800 text-white"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
