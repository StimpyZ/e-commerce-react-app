import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage/components/HomePage'
import { CategoryPage } from './pages/CategoryPage/components/CategoryPage'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { ProductPage } from './pages/ProductPage/components/ProductPage'

function App () {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
      <Form />
    </>
  )
}

export default App
