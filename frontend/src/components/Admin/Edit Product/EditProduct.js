import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import '../Add Product/AddProduct.css'; // Updated styles
import NavbarAdmin from '../Navbar/NavbarAdmin';
import Footer from '../../Home/Footer/Footer';
import { useAuthContext } from '../../../hooks/useAuthContext';

function EditProduct() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [stock, setStock] = useState(true);
  const [category, setCategory] = useState('Religious Accessories');
  const { id } = useParams();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/products/getproductbyid/${id}`);
      const json = await response.json();
      if (response.ok) {
        console.log(json.product);
        setProductName(json.product.title);
        setPrice(json.product.price);
        setDescription(json.product.description);
        setImage1(json.product?.productImages && json.product.productImages[0]);
        setImage2(json.product?.productImages && json.product.productImages[1]);
        setStock(json.product.itemInStock);
        setCategory(json.product.category);
      }
    };
    if (user) {
      fetchData();
    }
  }, [user, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!image1) {
      alert('Please upload at least one image.');
      return;
    }
  
    // Create a FormData object
    const formData = new FormData();
    formData.append('title', productName);
    formData.append('price', parseFloat(price));
    formData.append('description', description);
    formData.append('itemInStock', stock);
    formData.append('category', category);
  
    // Append images if they exist
    if (image1) {
      formData.append('productImages', image1);
    }
    if (image2) {
      formData.append('productImages', image2);
    }

    console.log(formData)
  
    // Send the FormData directly
    const response = await fetch(`http://localhost:5000/products/updateproduct/${id}`, {
      method: 'PUT',
      body: formData,
    });
  
    if (response.ok) {
      const result = await response.json();
      console.log('Product edited successfully:', result);
    } else {
      console.error('Failed to edit product:', response.statusText);
    }
  };

  

  return (
    <>
      <NavbarAdmin />
      <div className="admin-upload-form">
        <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer', fontSize: "1.5rem" }}>
          <IoMdArrowRoundBack />
        </Link>
        <h1>Edit Product</h1>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
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
