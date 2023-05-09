import { useState } from 'react'
import { useCart } from '../../../hooks/useCart'
import { useProductsById } from '../../../hooks/useProductById'
import './ProductPage.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos'
import { Link } from 'react-router-dom'
import { Trending } from './Trending'

export function ProductPage () {
  const { productById } = useProductsById()
  const [quantity, setQuantity] = useState(1)
  const { addMultipleToCart, cart, removeFromCart } = useCart()
  const totalPrice = productById.price * quantity

  const handleAddToCart = () => {
    addMultipleToCart(productById, quantity)
  }

  const productInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }
  const isProductInCart = productInCart(productById)
  return (
    <div className='product-page-div'>
      <div className='container'>
        <Link to='/'>
          <div className='back-home'>
            <ArrowBackIcon />
            Home
          </div>
        </Link>
        <div className='product-div'>
          <div className='product-left'>
            <h1>{productById.title}</h1>
            <div className='big-img'>
              <img src={productById.image} />
            </div>
          </div>
          <div className='product-right'>
            <p>{productById.description}</p>
            <div className='product-quantity'>
              <p>Quantity</p>
              <div className='product-quantity-buttons'>
                <button onClick={() => setQuantity(Math.max(quantity - 1, 1))}>-</button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className='adt-buy'>
              <button onClick={() => {
                isProductInCart
                  ? removeFromCart(productById)
                  : handleAddToCart()
              }}
              >{
                isProductInCart
                  ? 'Quit product'
                  : 'Add to cart'
              }
              </button>
              <button className='buy'>Buy now</button>
            </div>
          </div>

        </div>
      </div>
      <Trending />
    </div>
  )
}
