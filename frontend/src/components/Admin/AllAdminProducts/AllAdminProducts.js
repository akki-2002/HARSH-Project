  import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';
  import './AllAdminProducts.css';
  import NavbarAdmin from '../Navbar/NavbarAdmin';
  import Footer from '../../Home/Footer/Footer';
  import { MdDeleteForever } from 'react-icons/md';
  import { MdEdit } from 'react-icons/md'
  import { useAuthContext } from '../../../hooks/useAuthContext';


  function AllAdminProducts() {
    // Initializing the product list
    const {user} = useAuthContext()
    const [products, setProducts] = useState([]);
    useEffect(()=>{
      const fetchData = async()=>{
        const response = await fetch('http://localhost:5000/products/getallproducts');
        const json = await response.json();
        if(response.ok)
        {
          setProducts(json.products)
          console.log("products", json.products)
        }
      }

      if(user)
      {
        fetchData();
      }

    },[user])

      // State for pagination
      const [currentPage, setCurrentPage] = useState(1);
      const productsPerPage = 12;

      // Calculate the indexes for the current page
      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

      // Function to change the page
      const paginate = (pageNumber) => setCurrentPage(pageNumber);

      // Create page numbers array
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
      }

    return (
      <>
        <NavbarAdmin />

        <div className="sub-title">
          <div className="header">
            <h2 className="trendingNow-text">All Products</h2>

            <Link to="/addProduct" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <h3>Add New +</h3>
            </Link>
          </div>

          <div className="product-section">
    {currentProducts.map((product) => (
      <div className="product-item" key={product._id}>
      {product.productImages && product.productImages.length > 0 ? (

                <img src={`http://localhost:5000/uploads/${product.productImages[0]}`} alt={`http://localhost:5000/uploads/${product.productImages[0]}`} className="hoverable" />
      
              ) : (
                <p>No image available</p>
              )}
    
        <div className="product-details">
          <p className="model-type">{product.title}</p>
          <div className="price-container">
            <p className="price">&#8377;{product.price}</p>
            <Link to={`/deleteProduct`}>
              <MdDeleteForever className="fa-cart-plus" />
            </Link>
          </div>
        </div>
        <Link to={`/editProduct`} className="edit-button">
          <MdEdit className="edit-icon" />
        </Link>
      </div>
    ))}
  </div>

          <div className="pagination">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={currentPage === number ? 'active' : ''}
              >
                {number}
              </button>
            ))}
          </div>
        </div>

        <Footer />
      </>
    );
  }

  export default AllAdminProducts;
