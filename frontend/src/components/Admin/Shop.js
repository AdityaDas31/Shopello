import React, { Fragment, useState } from 'react';
// import './AdminPage.css'
import AdminPage from './AdminPage';
import "./Form.css";

const Shop = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        images: [],
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        setFormData({
            ...formData,
            [name]: type === 'file' ? e.target.files : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
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
                                    Analytics
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

                    <div className="product-form-container">
                        <form onSubmit={handleSubmit} className="product-form">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="price">Price:</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>

                            <label htmlFor="category">Category:</label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="images">Images:</label>
                            <input
                                type="file"
                                id="images"
                                name="images"
                                onChange={handleChange}
                                multiple
                                accept="image/*"
                            />

                            <button type="submit">Submit</button>
                        </form>
                    </div>


                </main>
            </div>
        </Fragment>
    )
}

export default Shop