import React, { Fragment, useState, useEffect } from 'react';
import AdminPage from './AdminPage';
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router";
import { clearErrors, createProduct } from '../../actions/productActions';
import { NEW_PRODUCT_RESET } from '../../constants/productConstants';

const Shop = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const { loading, error, success } = useSelector((state) => state.newProduct)

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const categories = ['Electronics', 'Clothing', 'Books'];

    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        };

        if(success){
            alert.success("Product Created Successfully");
            navigate("/admin");
            dispatch({ type: NEW_PRODUCT_RESET });
        };
    }, [dispatch, alert, error, navigate, success])


    const createProductSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("price", price);
        myForm.set("description", description);
        myForm.set("category", category);
        myForm.set("stock", stock);

        images.forEach((image) => {
            myForm.append("images", image);
        });

        dispatch(createProduct(myForm));
        console.log('Hi')
    }

    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
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
                        <form encType="multipart/form-data" onSubmit={createProductSubmitHandler}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" placeholder="Product Name" required value={name} onChange={(e) => setName(e.target.value)} />

                            <label htmlFor="price">Price:</label>
                            <input type="number" placeholder="Product Price"  onChange={(e) => setPrice(e.target.value)} required />

                            <label htmlFor="description">Description:</label>
                            <textarea placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="1" required />

                            <label htmlFor="category">Category:</label>
                            <select  onChange={(e) => setCategory(e.target.value)} >
                                <option value="">Select a category</option>
                                {categories.map((cate) => (
                                    <option key={cate} value={cate}>
                                        {cate}
                                    </option>
                                ))}
                            </select>

                            <label htmlFor="price">Stock:</label>
                            <input type="number" placeholder='Paroduct Stock' onChange={(e) => setStock(e.target.value)} required />

                            <label htmlFor="images">Images:</label>
                            <input type="file" name="avatar" accept="image/*" onChange={createProductImagesChange} multiple />

                            <div id="imagePreviewContainer" className="image-preview-container">
                                {imagesPreview.map((image, index) => (
                                    <img key={index} src={image} alt="Product Preview" />
                                ))}
                            </div>

                            <button className='submit_btn' type="submit" disabled={loading ? true : false}>Submit</button>
                        </form>
                    </div>



                </main>
            </div>
        </Fragment>
    )
}

export default Shop