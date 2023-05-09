import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity = 1) => {
    const productIndex = cart.findIndex(item => item.id === product.id)

    if (productIndex >= 0) {
      const newCart = cart.slice()
      newCart[productIndex] = {
        ...newCart[productIndex],
        quantity: newCart[productIndex].quantity + quantity,
        totalPrice: newCart[productIndex].totalPrice + (product.price * quantity)
      }
      setCart(newCart)
    } else {
      setCart(prevState =>
        [...prevState, { ...product, quantity, totalPrice: product.price * quantity }])
    }
  }

  const addMultipleToCart = (product, quantity) => {
    addToCart(product, quantity)
  }

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const decreaseQuantity = (product) => {
    const productIndex = cart.findIndex(item => item.id === product.id)

    if (productIndex >= 0) {
      const newCart = [...cart]
      const newQuantity = newCart[productIndex].quantity - 1
      if (newQuantity > 0) {
        newCart[productIndex] = {
          ...newCart[productIndex],
          quantity: newQuantity,
          totalPrice: newCart[productIndex].totalPrice - product.price
        }
        setCart(newCart)
      } else {
        removeFromCart(product)
      }
    }
  }

  const calculateTotal = () => {
    let total = 0

    cart.forEach((product) => {
      total += product.totalPrice
    })

    return total
  }

  const clearCart = () => {
    setCart([])
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    addMultipleToCart,
    decreaseQuantity,
    calculateTotal
  }
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
