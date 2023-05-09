import { Link } from 'react-router-dom'
import './Products.css'

export function Products ({ products }) {
  return (
    <section className='product-container'>
      <div className='container'>
        <div className='products-grid2'>
          {
            products.map(item => {
              return (
                <div key={item.id} className='product2 normal'>
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
