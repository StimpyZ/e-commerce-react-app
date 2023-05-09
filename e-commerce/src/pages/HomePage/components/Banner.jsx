import { Link } from 'react-router-dom'
import imageModelo from '../../../assets/modelo.jpg'
import './Banner.css'

export function Banner () {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner-container'>
          <div className='text-side'>
            <h2>Creative harmonius dress</h2>
            <p>Shop the latest fashion trends online at low prices</p>
            <Link to='/categories'>
              <button>Shop Now</button>
            </Link>
          </div>
          <div className='img-side'>
            <img src={imageModelo} alt='modelo para banner' />
          </div>
        </div>
      </div>
    </section>
  )
}
