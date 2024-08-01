import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import rgtarrow from '../../components/Images/rgtarrow.png'
import './Order.css'

function OrderHistory() {
  // Sample order data
  const [orders, setOrders] = useState([
    {
      id: '2312001',
      date: '19/05/2024',
      status: 'Completed',
    
      actions: ['VIEW INVOICE']
    },
    {
        id: '2312001',
        date: '19/05/2024',
        status: 'Completed',
    
        actions: ['VIEW INVOICE']
      }
  ]);

  const handleActionClick = (action, orderId) => {
    // Handle different actions here
    console.log(`${action} clicked for order ${orderId}`);
    // Add logic for each action as needed
  };

  return (
    <>
      <div className="orderHistoryMain">
        <table className="orderHistory">
          <thead>
            <tr className="ohisHeading">
              <th>ORDER</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="ohisHead1">
                <td>#{order.id}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>
                  {order.actions.map(action => (
                    <button 
                      key={action}
                      onClick={() => handleActionClick(action, order.id)}
                    >
                      {action}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="orderHisExplore">
          <p>
            Explore more of our Amazing Collection 
            <Link to={'/'} >
              <img src={rgtarrow} alt="" />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default OrderHistory
