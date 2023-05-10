import { CartIcon, ClearCartIcon } from './Icons'
import { CartItem } from './CartItem'
import './Cart.css'
import { useCart } from '../hooks/useCart'
import CloseIcon from '@mui/icons-material/Close'
import ErrorIcon from '@mui/icons-material/Error'
import { useIcon } from '../hooks/useIcon'

export function Cart () {
  const { cart, clearCart, calculateTotal } = useCart()
  const total = calculateTotal().toFixed(2)
  const { showIcon } = useIcon()

  return (
    <>
      <label className='cart-button' htmlFor='cartCheckboxId'>
        <div className='cart-info'>
          {showIcon && <ErrorIcon className='icon-info' />}
          <CartIcon />
        </div>
      </label>
      <input
        type='checkbox'
        id='cartCheckboxId'
        style={{ display: 'none' }}
      />
      <aside className='cart'>
        <div className='button-close'>
          <h2>Your Shoping Cart</h2>
          <label className='cart-button-close' htmlFor='cartCheckboxId'>
            <CloseIcon />
          </label>
          <input
            type='checkbox'
            id='cartCheckboxId'
            style={{ display: 'none' }}
          />
        </div>
        <ul>
          {cart.map((items) => (
            <CartItem key={items.id} products={items} />
          ))}
        </ul>
        <div className='subtotal'>
          <div className='sub-right'>
            <p>Subtotal</p>
            <p>${total}</p>
          </div>
        </div>
        <div className='clear-button'>
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  )
}
