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

    const {user} = useAuthContext()
    // console.log("navbar", user)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Debugging output to check the value of 'user'
    // console.log("User state in Navbar: ", user);
    const [products, setProducts] = useState('')

  useEffect(() => {
    const fetchProducts = async ()=>{
    const response = await fetch("https://harsh-project-4-kmzz.onrender.com/products/getallproducts")
        const json = await response.json()

        if(response.ok){
            setProducts(json.products)
            console.log(json)
        }
    }
    // if(user)
    // {

      fetchProducts()  
    // }
}, [])
    const [searchQuery, setSearchQuery] = useState('');
    const [seStyle, setSeStyle] = useState({
      height:'0',
      padding: '0px'
    })
    
    const filteredItems = Array.isArray(products) ? products.filter((item) =>
    searchQuery === '' || !item.title ? false : item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];
    
    console.log("filteredItems", filteredItems )
    
    
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    //   console.log(searchQuery)

    //   if(searchQuery != '')
    //   {
        setSeStyle({
            height: "max-content",
            padding: "10px"
          })
    //   }
    };

    console.log('cart length', user?.user?.cart?.length)
    return (
        <div className='navMain'>
            <Link to={'/'}>
                <img src={logoImg} className='logo' alt="logo" />
            </Link>
            <div className='navComps'>
                <Link to={'/dailyAll'}>DAILY ACCESSORIES</Link>
                <Link to={'/religiousAll'}>RELIGIOUS ACCESSORIES</Link>
                <div className='navSearchBar'>
                        <input type="text" placeholder="Search" value={searchQuery || ''}
                onChange={(e)=>handleSearch(e)}/>
                    <img src={search} alt="search" />
                    <ul className='searchedEle' style={seStyle}>
                    {filteredItems.map((item) => (
                        <Link key={`/product/${item._id}`} to={`/product/${item._id}`}>
                        <li>
                            {item?.title}
                        </li>
                        </Link>
                    ))}
                    </ul>
                </div>

                {user ? 
                    <div className='cno'>
                        <Link to={`/cart/${user?.user?._id}`}>
                            <img src={cart} alt="cart" />
                            <p>{user?.user?.cart?.length}</p>
                        </Link>
                        <Link to={'/order'}>
                            <img src={userProfImg} alt="user profile" />
                        </Link>
                    </div>
                 : 
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
                
                {user ? 
                    <div className='cno'> 
                        <Link to={`/cart/${user?.user?._id}`}>
                            <img src={cart} className='icon' alt="cart" />
                        </Link>
                        <Link to={'/order'}>
                            <img src={userProfImg} className='icon' alt="user profile" />
                        </Link>
                    </div>
                : 
                    <Link to={'/signin'}>
                        <button className='nvLoginBtn'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Navbar;
