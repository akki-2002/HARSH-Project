import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import '../Add Product/AddProduct.css'; // Updated styles
import NavbarAdmin from '../Navbar/NavbarAdmin';
import Footer from '../../Home/Footer/Footer';

function EditProduct() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [stock, setStock] = useState(true);
  const [category, setCategory] = useState('Religious Accessories');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image1) {
      alert('Please upload at least one image.');
      return;
    }

    const newProduct = {
      name: productName,
      price: parseFloat(price),
      description,
      images: [image1, image2].filter((img) => img), // Filter out null values
      stock,
      category,
    };
    console.log('New Product:', newProduct);
    // Here, you can send `newProduct` to a backend API to save it in a database
    alert('Product Uploaded Successfully!');
    // Reset form after submission
    setProductName('');
    setPrice('');
    setDescription('');
    setImage1(null);
    setImage2(null);
    setStock(true);
    setCategory('Religious Accessories');
  };

  return (
    <>
      <NavbarAdmin />
      <div className="admin-upload-form">
      <Link to="/admin" style={{ textDecoration: 'none', cursor: 'pointer', fontSize: "1.5rem" }}><IoMdArrowRoundBack /></Link>
        <h1> Edit Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Religious Accessories">Religious Accessories</option>
              <option value="Daily Accessories">Daily Accessories</option>
    
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image1">Product Image 1</label>
            <input
              type="file"
              id="image1"
              onChange={(e) => setImage1(e.target.files[0])}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image2">Product Image 2 (Optional)</label>
            <input
              type="file"
              id="image2"
              onChange={(e) => setImage2(e.target.files[0])}
            />
          </div>

          <div className="form-group">
            <label htmlFor="stock">Stock Status</label>
            <select
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value === 'true')}
            >
              <option value={true}>In Stock</option>
              <option value={false}>Out of Stock</option>
            </select>
          </div>

          <button type="submit">Edit Product</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default EditProduct;
