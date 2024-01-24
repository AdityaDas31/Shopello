import React, { Fragment, useState } from 'react';
import AdminPage from './AdminPage';
import "./Form.css";

const Shop = () => {
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        images: [],
    });

    const categories = ['Select a category', 'Electronics', 'Clothing', 'Books'];

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            setProductData({
                ...productData,
                [name]: Array.from(files),
            });
        } else {
            setProductData({
                ...productData,
                [name]: value,
            });
        }
    };

    const handleImagePreview = (e) => {
        const imagePreviewContainer = document.getElementById('imagePreviewContainer');
        const images = e.target.files;

        imagePreviewContainer.innerHTML = '';

        Array.from(images).forEach((image) => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(image);
            img.alt = 'Product Preview';
            imagePreviewContainer.appendChild(img);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', productData);
    };

    return (
        <Fragment>
            <AdminPage />
            <div className='content'>
                <main>
                    <div className="header-admin">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li><a href="#">
                                    Admin
                                </a></li>
                                /
                                <li><a href="#" className="active">Shop</a></li>
                            </ul>
                        </div>
                        <a href="#" className="report">
                            <i className="fa-solid fa-cloud-arrow-down"></i>
                            <span>Download CSV</span>
                        </a>
                    </div>

                    <div className="product-form">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={productData.name} onChange={handleChange} required />

                            <label htmlFor="price">Price:</label>
                            <input type="text" id="price" name="price" value={productData.price} onChange={handleChange} required />

                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" value={productData.description} onChange={handleChange} required />

                            <label htmlFor="category">Category:</label>
                            <select id="category" name="category" value={productData.category} onChange={handleChange} required>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>

                            <label htmlFor="images">Images:</label>
                            <input type="file" id="images" name="images" accept="image/*" onChange={(e) => { handleChange(e); handleImagePreview(e); }} multiple required />

                            <div id="imagePreviewContainer" className="image-preview-container"></div>

                            <button className='submit_btn' type="submit">Submit</button>
                        </form>
                    </div>



                </main>
            </div>
        </Fragment>
    )
}

export default Shop