import { Link } from 'react-router-dom'
import './ProductContainer.css'

export function ProductContainer ({ product }) {
  return (
    <section className='product-container'>
      <h2 className='container best'>Best Products</h2>
      <div className='container'>
        <div className='products-grid'>
          {
            product.slice(8, 16).map(item => {
              return (
                <div key={item.id} className='product normal'>
                  <Link to={`/product/${item.id}`}>
                    <div className='product-header'>
                      <img src={item.image} alt={item.id} />
                    </div>
                    <div className='product-details'>
                      <p>{item.title}</p>
                      <div className='product-price'>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
