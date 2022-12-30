import useCart from '~/store/cart'
import Card from './card'
import EmptyCart from './empty-cart'

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
