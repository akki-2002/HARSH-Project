import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function OrderLeft() {
    const [olh, setOlh] = useState("oh");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleClick = (e) => {
        setOlh(e);
        console.log(`Clicked: ${e}`);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log(`Sidebar open: ${!isSidebarOpen}`);
    };

    return (
        <>
            <div className={`orderLeft ${isSidebarOpen ? 'open' : ''}`}>
                <div className="olHeading">
                    <Link to="/admin"><h1>Hello</h1></Link>
                    <h2>Akshat</h2>
                    <button className="hamburger" onClick={toggleSidebar}>
                        ☰
                    </button>
                </div>
                <div className="olContent">
                    <h3 onClick={() => handleClick("oh")} className={olh === "oh" ? "olContentH3" : ""}>
                        <Link to={'/order'}>Order History</Link>
                    </h3>
                    <h3 onClick={() => handleClick("acd")} className={olh === "acd" ? "olContentH3" : ""}>
                        <Link to={'/order/acdetails'}>Account Details</Link>
                    </h3>
                </div>
                <div className="olLogout">
                    <Link to={'/signin'} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                        <h3>Log out</h3>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default OrderLeft;
