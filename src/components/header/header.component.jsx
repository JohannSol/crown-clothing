import { Link } from 'react-router-dom'
import './_header.styles.scss'
import logo from './logo.svg'

const Header =()=> (
            <div className='header'>
                <Link to={'/'} className="logo-container">
                    <img src={logo} alt=""/>
                </Link>
                <div className="options">
                    <Link to={'/shop'} className='option'>SHOP</Link>
                    <Link to={'/contact'} className='option'>CONTACT</Link>
                    <Link to={'/sign_in'} className='option'>SIGN IN</Link>
                </div>
            </div>
        )

export default Header;
