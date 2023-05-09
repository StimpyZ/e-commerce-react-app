import { useId } from 'react'
import './Filters.css'
import { useFilter } from '../../../hooks/useFilter'

export function Filters () {
  const filterRangeId = useId()
  const filterCategoryId = useId()
  const { filter, setFilter } = useFilter()

  const handleChangeRange = (event) => {
    setFilter(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilter(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <div className='filter'>
      <div className='filter-range'>
        <label htmlFor={filterRangeId}>Filter by price</label>
        <input
          className='custom-range'
          id={filterRangeId}
          type='range'
          min='0'
          max='999.99'
          onChange={handleChangeRange}
          value={filter.minPrice}
        />
        <strong>${filter.minPrice}</strong>
      </div>

      <div className='filter-category'>
        <label htmlFor={filterCategoryId}>Filter by category</label>
        <select id={filterCategoryId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value='jewelery'>Jewelery</option>
          <option value='electronics'>Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
    </div>
  )
}
