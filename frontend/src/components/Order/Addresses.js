import React, { useState } from "react";

function Addresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      address: "Shri Ram Apartments, Jeevan Jyoti Colony, Satna- 485001, Madhya Pradesh INDIA",
      phone: "99999 99999"
    },
    {
      id: 2,
      address: "Shri Ram Apartments, Jeevan Jyoti Colony, Satna- 485001, Madhya Pradesh INDIA",
      phone: "+91 7000296299"
    }
  ]);

  const addAddress = () => {
    const newAddress = {
      id: addresses.length + 1,
      address: "New Address",
      phone: "New Phone Number"
    };
    setAddresses([...addresses, newAddress]);
  };

  const removeAddress = (id) => {
    const updatedAddresses = addresses.filter(address => address.id !== id);
    setAddresses(updatedAddresses);
  };

  return (
    <>
      <table className="orderHistory orderAddress">
        <thead>
          <tr className="ohisHeading oaHeading">
            <th>Addresses</th>
            <th>
              <button onClick={addAddress}>ADD ANOTHER ADDRESS</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {addresses.map(address => (
            <tr key={address.id} className="ohisHead1 ohisHead11 oaHead1">
              <td>
                {address.address}, Phone Number - {address.phone}
              </td>
              <td>
                <button onClick={() => removeAddress(address.id)}>REMOVE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Addresses;
