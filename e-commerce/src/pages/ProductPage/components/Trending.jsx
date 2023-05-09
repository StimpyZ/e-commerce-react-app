import { Link } from 'react-router-dom'
import { useProducts } from '../../../hooks/useProducts'
import './Trending.css'

export function Trending () {
  const { products } = useProducts()
  return (
    <div className='trending'>
      <div className='container'>
        <div className='media-scroller snaps-inline'>
          {
          products.slice(0, 12).map(item => (
            <Link key={item.id} to={`/product/${item.id}`} className='media-element'>
              <img src={item.image} alt={item.title} />
              <div className='media-description'>
                <h3>{item.title}</h3>
                <strong>${item.price}</strong>
              </div>
            </Link>
          )
          )
        }
        </div>
      </div>
    </div>
  )
}
