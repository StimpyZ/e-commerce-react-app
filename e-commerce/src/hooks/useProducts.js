import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/getProductById'

export function useProducts () {
  const [products, setProducts] = useState([])

  const getProductsData = async () => {
    try {
      const productData = await getAllProducts()
      setProducts(productData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductsData()
  }, [])

  return { products }
}
