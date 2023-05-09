import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos'
import './CategoryPage.css'
import { Filters } from './Filters'
import { Products } from './Products'
import { useFilter } from '../../../hooks/useFilter'
import { useProducts } from '../../../hooks/useProducts'

export function CategoryPage () {
  const { products } = useProducts()
  const { filterProducts } = useFilter()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <div className='container'>
        <div className='category-header'>
          <div className='title-home'>
            <Link to='/'>
              <div>
                <ArrowBackIcon />
              </div>
              Home
            </Link>
            <h2>Category</h2>
          </div>
          <Filters />
        </div>
      </div>
      <Products products={filteredProducts} />
    </>
  )
}

export default CategoryPage
