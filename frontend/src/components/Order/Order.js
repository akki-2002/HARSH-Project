import React from 'react';
import './Order.css';
import OrderLeft from './OrderLeft';
import OrderRgt from './OrderRgt';

const Order = () => {
  return (
    <div className="order">
      <OrderLeft />
      <OrderRgt />
    </div>
  );
};

export default Order;
