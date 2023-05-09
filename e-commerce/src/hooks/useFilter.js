import { useContext } from 'react'
import { FilterContext } from '../context/filterContext'

export function useFilter () {
  const { filter, setFilter, filterProducts } = useContext(FilterContext)
  return { filter, setFilter, filterProducts }
}
