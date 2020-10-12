import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider';
import { auth } from './firebase'

function Header() {

    const [{basket, user}] = useStateValue();

    const login = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className='header'>
            <Link to='/'>
                <img className='header-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
            </Link>

            <div className='header-search'>
                <input type='text' className='header-searchInput' />
                <SearchIcon className='header-searchIcon' />
            </div>

            <div className='header-nav'>
                <Link to={!user && '/login'} className='header-link'>
                    <div onClick={login} className='header-option'>
                        <span className='header-optionLinkOne'>Hello {user?.email}</span>
                        <span className='header-optionLinkTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='/' className='header-link'>
                    <div className='header-option'>
                        <span className='header-optionLinkOne'>Returns</span>
                        <span className='header-optionLinkTwo'>& Orders</span>
                    </div>
                </Link>

                <Link to='/' className='header-link'>
                    <div className='header-option'>
                        <span className='header-optionLinkOne'>Your</span>
                        <span className='header-optionLinkTwo'>Prime</span>
                    </div>
                </Link>

                <Link to='/checkout' className='header-link'>
                    <div className='header-optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header-optionLinkTwo header-basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
