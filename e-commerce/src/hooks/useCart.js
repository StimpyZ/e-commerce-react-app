import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export function useCart () {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    addMultipleToCart,
    decreaseQuantity,
    calculateTotal
  } = useContext(CartContext)
  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    addMultipleToCart,
    decreaseQuantity,
    calculateTotal
  }
}
