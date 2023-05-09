import { createContext, useState } from 'react'

export const FilterContext = createContext()

export function FilterProvider ({ children }) {
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(item => {
      return item.price >= filter.minPrice &&
      (filter.category === 'all' || item.category === filter.category)
    })
  }

  const value = {
    filter,
    setFilter,
    filterProducts
  }
  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}
