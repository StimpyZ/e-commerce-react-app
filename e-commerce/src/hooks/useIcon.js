import { useEffect, useState } from 'react'
import { useProducts } from './useProducts'
import { useCart } from './useCart'

export function useIcon () {
  const { cart } = useCart()
  const { products } = useProducts()
  const [showIcon, setShowIcon] = useState(false)

  useEffect(() => {
    const isProductInCart = products.some(product => productInCart(product))
    setShowIcon(isProductInCart)
  }, [cart])

  const productInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }
  return { showIcon }
}
