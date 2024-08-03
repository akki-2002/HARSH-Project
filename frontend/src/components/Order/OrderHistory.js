import React from 'react';
import { Link } from 'react-router-dom';

const ordersData = {
  Pending: [
    { id: 123, name: 'Akshat Agrawal', address: 'Mumbai, 400001', date: '12/08/2024', price: '2000', status: 'Pending' },
    { id: 124, name: 'Rahul Singh', address: 'Pune, 411007', date: '15/08/2024', price: '1500', status: 'Pending' },
    { id: 123, name: 'Akshat Agrawal', address: 'Mumbai, 400001', date: '12/08/2024', price: '2000', status: 'Pending' },
    { id: 123, name: 'Akshat Agrawal', address: 'Mumbai, 400001', date: '12/08/2024', price: '2000', status: 'Pending' },
    { id: 123, name: 'Akshat Agrawal', address: 'Mumbai, 400001', date: '12/08/2024', price: '2000', status: 'Pending' },
    { id: 123, name: 'Akshat Agrawal', address: 'Mumbai, 400001', date: '12/08/2024', price: '2000', status: 'Pending' },
  ],
};

function OrderHistory() {
  return (
    <>
  
    <div className="cust-orders-container">
      {Object.entries(ordersData).map(([status, orders]) => (
        <div className={`cust-orders-section cust-orders-${status.toLowerCase()}`} key={status}>
          <table className="cust-orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th className="hidden-mobile">NAME</th>
                <th className="hidden-mobile">ADDRESS</th>
                <th>DATE</th>
                <th className="hidden-mobile">PRICE</th>
                <th>STATUS</th>
                <th>VIEW ORDER</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td className="hidden-mobile">{order.name}</td>
                  <td className="hidden-mobile">{order.address}</td>
                  <td>{order.date}</td>
                  <td className="hidden-mobile">₹{order.price}</td>
                  <td className={`cust-orders-status cust-orders-status-${order.status.toLowerCase()}`}>{order.status}</td>
                  <td className='cust-orders-view-order'>
                    <Link to="/orderDetails" style={{ textDecoration: 'none', cursor: 'pointer', color: "#9A318A" }}>DETAILS</Link>
                  </td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </>
  );
}

export default OrderHistory;
