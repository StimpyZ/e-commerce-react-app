
import { Link } from 'react-router-dom'
import './HomeContainer.css'

export function HomeContainer ({ products }) {
  const classMaping = {
    0: 'grid-one',
    1: 'grid-two',
    2: 'grid-three',
    3: 'grid-four'
  }
  const getCustomClass = (index) => classMaping[index] || ''
  return (
    <>
      <section className='home-container'>
        <div className='container'>
          <div className='grid-container'>
            {
              products.slice(2, 6).map((item, index) => {
                return (
                  <div key={item.id} className={`featured ${getCustomClass(index)}`}>
                    <Link to={`/product/${item.id}`}>
                      <div id='img1' className='lil-overlay' />
                      <img src={item.image} />
                      <p className='main-description'> {item.title} </p>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}
