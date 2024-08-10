import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import search from '../../Images/iconamoon_search-light.png';
import cart from '../../Images/Cart.png';
import userProfImg from '../../Images/Group 46.png';
import logoImg from '../../Images/logo.png';
import './Navbar.css';
import { useAuthContext } from '../../../hooks/useAuthContext';

function Navbar() {
    const [scrollY, setScrollY] = useState(0);
    const [isUser, setIsUser] = useState('')
    const {user} = useAuthContext()
    console.log("user", user)


    useEffect(() => {
        setIsUser(user)
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    }, [scrollY, user]);

    return (
        <>
            <div className='navMain'>
                <Link to={'/'}>
                    <img src={logoImg} className='logo' alt="" />
                </Link>
                <div className='navComps'>
                    <Link to={'/dailyAll'}>DAILY ACCESSORIES</Link>
                    <Link to={'/religiousAll'}>RELIGIOUS ACCESSORIES</Link>
                    <div className='navSearchBar'>
                        <input type="text" placeholder='Search' />
                        <img src={search} alt="search" />
                    </div>

                    {isUser?.token ?
                    
                    <div className='cno'>
                    <Link to={'/cart'}>
                        <img src={cart} alt="cart" />
                    </Link>
                    <Link to={'/order'}>
                        <img src={userProfImg} alt="userProfImg" />
                    </Link>
                    </div> : 
                    <Link to={'/signin'}>
                    <button className='nvLoginBtn'>Login</button>
                    </Link>
                    
                }
                
                </div>
                <div className='navIcons'>
                    <div className='smallSearchBar'>
                        <input type="text" placeholder='Search' />
                        <img src={search} alt="search" />
                    </div>
                    
                    {user  ? 
                    <div className='cno'> 
                        <Link to={'/cart'}>
                        <img src={cart} className='icon' alt="cart" />
                    </Link>
                    <Link to={'/order'}>
                        <img src={userProfImg} className='icon' alt="userProfImg" />
                    </Link>
                    </div>: 
                    
                    <Link to={'/signin'}>
                    <button className='nvLoginBtn'>Login</button>
                    </Link>
                    }
                    
                </div>
            </div>
        </>
    );
}

export default Navbar;
