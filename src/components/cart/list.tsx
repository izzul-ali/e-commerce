import useCart from '~/store/cart'
import Card from './card'

export default function List() {
  const { totalProductInCarts, carts } = useCart()

  return (
    <div className="grid grid-cols-1 gap-7">
      {totalProductInCarts() === 0 ? (
        <EmptyCart />
      ) : (
        carts.map((p, i) => (
          <Card
            key={i}
            id={p.id}
            count={p.count}
            stok={p.stok}
            img={p.img}
            isSelected={p.isSelected}
            price={p.price}
            title={p.title}
          />
        ))
      )}
    </div>
  )
}

function EmptyCart() {
  return (
    <div className="h-[40vh] flex flex-col my-auto justify-center leading-loose items-center text-gray-600">
      <h2 className="font-semibold text-xl">Oops!</h2>
      <p>
        Keranjang kamu masih kosong... <span>🥲️</span>
      </p>
    </div>
  )
}
