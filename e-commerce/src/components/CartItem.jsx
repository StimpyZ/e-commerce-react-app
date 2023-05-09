import { useCart } from '../hooks/useCart'
export function CartItem ({ products }) {
  const { addToCart, decreaseQuantity } = useCart()

  const handleDecrease = () => {
    decreaseQuantity(products)
  }
  return (
    <>
      <li>
        <div className='cart-item'>
          <img src={products.image} alt={products.title} />
        </div>
        <div className='cart-info'>
          <div className='cart-price'>
            <strong>{products.title}</strong> ${products.price}
          </div>
          <div className='pie'>
            <button
              className='quantity'
              onClick={handleDecrease}
            >-
            </button>
            <p>
              {products.quantity}
            </p>
            <button
              className='quantity'
              onClick={() => addToCart(products)}
            >+
            </button>
          </div>
        </div>
      </li>
    </>
  )
}
