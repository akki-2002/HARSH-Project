import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function OrderLeft() {
    const [olh, setOlh] = useState("oh")

    const handleClick= (e) =>{
        setOlh(e)
    }

  return (
    <>

    <div className="orderLeft">
        <div className="olHeading">
        <h1>Hello</h1>
        <h2>Akshat</h2>
        </div>
        <div className="olContent">
        <h3 onClick={(e)=>handleClick("oh")} className={olh==="oh"? "olContentH3": ""} >
         <Link to={'/order'}>Order History</Link> 
          </h3>
        <h3 onClick={(e)=>handleClick("ad")} className={olh==="ad"? "olContentH3": ""} ><Link to={'/order/addresses'}>Addresses</Link></h3>
        <h3 onClick={(e)=>handleClick("acd")} className={olh==="acd"? "olContentH3": ""}><Link  to={'/order/acdetails'}>Account Details</Link></h3>
        </div>
        <div className="olLogout">
        <Link to={'/signin'} style={{ textDecoration: 'none',  cursor: 'pointer' }}><h3>Log out</h3></Link>
        </div>
    </div>
    
    </>
  )
}

export default OrderLeft