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
  const [image1Preview, setImage1Preview] = useState('');
  const [image2Preview, setImage2Preview] = useState('');
  const [stock, setStock] = useState(true);
  const [category, setCategory] = useState('Religious Accessories');
  const { id } = useParams();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://harsh-project-4-kmzz.onrender.com/products/getproductbyid/${id}`);
      const json = await response.json();
      if (response.ok) {
        console.log(json.product);
        setProductName(json.product.title);
        setPrice(json.product.price);
        setDescription(json.product.description);
        setImage1Preview(`https://harsh-project-4-kmzz.onrender.com/uploads/${json.product?.productImages[0]}`);
        setImage2Preview(`https://harsh-project-4-kmzz.onrender.com/uploads/${json.product?.productImages[1]}`);
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
  
    // if (!image1) {ease upload at least one image.');
    //   return;
    // }
    //   alert('Pl
  
    const formData = new FormData();
    formData.append('title', productName);
    formData.append('price', parseFloat(price));
    formData.append('description', description);
    formData.append('itemInStock', stock);
    formData.append('category', category);
  
    if (image1) {
      formData.append('productImages', image1);
    }
    if (image2) {
      formData.append('productImages', image2);
    }

    console.log(formData)
  
    const response = await fetch(`https://harsh-project-4-kmzz.onrender.com/products/updateproduct/${id}`, {
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

  const handleImageChange = (e, setImage, setPreview) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
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
            {image1Preview && <img src={image1Preview} alt="Preview" style={{ width: '100px', height: '100px' }} />}
            <input
              type="file"
              id="image1"
              onChange={(e) => handleImageChange(e, setImage1, setImage1Preview)}
              // required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image2">Product Image 2 (Optional)</label>
            {image2Preview && <img src={image2Preview} alt="Preview" style={{ width: '100px', height: '100px' }} />}
            <input
              type="file"
              id="image2"
              onChange={(e) => handleImageChange(e, setImage2, setImage2Preview)}
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
