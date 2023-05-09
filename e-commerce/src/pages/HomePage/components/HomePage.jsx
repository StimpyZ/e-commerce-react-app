import React from 'react'
import './HomePage.css'
import { HomeContainer } from './HomeContainer'
import { ProductContainer } from './ProductContainer'
import { Banner } from './Banner'
import { useProducts } from '../../../hooks/useProducts'

export function HomePage () {
  const { products } = useProducts()
  return (
    <>
      <main>
        <HomeContainer products={products} />
        <ProductContainer product={products} />
        <Banner />
      </main>
    </>
  )
}

export default HomePage
