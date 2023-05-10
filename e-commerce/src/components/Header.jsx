import { Link } from 'react-router-dom'
import Logo from '../assets/canvas.png'
import { useScroll } from '../hooks/useScroll'
import './Header.css'
import { Cart } from './Cart'

export function Header () {
  const { navHeight } = useScroll()

  return (
    <>
      <nav className={`navMenu ${navHeight === 80 ? 'small' : 'large'}`}>
        <div className='nav-container'>
          <Link to='/'>
            <img src={Logo} className='logo' alt='logo de la pagina' />
          </Link>
          <div className='navigates'>
            <Link to='/categories'>CATEGORIES</Link>
            <Cart />
          </div>
        </div>
      </nav>
    </>
  )
}
