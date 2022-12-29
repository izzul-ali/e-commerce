import useCart from '~/store/cart'
import { formatCurrency } from '~/utils/currency'

export default function Checkout() {
  const totalPrice = useCart((state) => state.totalPrice)

  return (
    <div className="fixed right-0 left-0 bottom-0 pb-5 pt-2 flex justify-between items-center bg-white px-5 z-10">
      <div>
        <p>Total</p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <button
        onClick={() => console.log('first')}
        disabled={totalPrice.toFixed() === '0'}
        className={`${
          totalPrice.toFixed() === '0' ? 'opacity-80' : 'opacity-100'
        } text-white px-5 py-3 rounded-md text-sm bg-violet-600`}
      >
        Checkout
      </button>
    </div>
  )
}
