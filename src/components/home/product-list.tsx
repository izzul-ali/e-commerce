import ProductCard from '../product-card'

export default function ProductList() {
  return (
    <>
      <div className="mt-10 flex justify-between items-center">
        <h2 className="text-xl font-medium">Special For You</h2>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-x-2 gap-y-5 place-content-between">
        {[...Array(10)].map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </>
  )
}
