type Product = {
  img: string
  title: string
  rating: string
  price: string
}

export default function ProductCard({ img, price, rating, title }: Product) {
  return (
    <div className="h-[20rem] shadow-md w-full border border-gray-300 hover:border-violet-500 hover:-translate-y-1 transition duration-300 rounded-md overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-44 object-contain rounded-t py-2 px-1"
      />
      <div className="p-2 space-y-3">
        <h3 className="text-base sm:text-base font-medium line-clamp-2">
          {title}
        </h3>
        <p className="text-xs px-2 py-1 bg-gray-100 w-fit rounded-md">
          <span>⭐️</span> {rating}
        </p>
        <p className="font-medium text-sm tracking-wide">{price}</p>
      </div>
    </div>
  )
}
