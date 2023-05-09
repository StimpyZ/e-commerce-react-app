import { useEffect, useState } from 'react'
import { getProductById } from '../services/getProductById'
import { useParams } from 'react-router-dom'

export function useProductsById () {
  const [productById, setProductById] = useState([])
  const { id } = useParams()

  const getProductData = async (id) => {
    try {
      const productData = await getProductById(id)
      setProductById(productData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductData(id)
  }, [id])

  return { productById }
}
