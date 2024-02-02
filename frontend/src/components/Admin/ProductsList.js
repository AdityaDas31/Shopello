import React, { Fragment, useEffect, useState } from 'react';
import AdminPage from './AdminPage';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getAdminProduct, approveProduct, availableProducts } from '../../actions/productActions';
import { useAlert } from "react-alert";
import { useNavigate, useParams } from 'react-router-dom';
import { APPROVE_PRODUCT_RESET } from '../../constants/productConstants';
import { AVAILABLE_PRODUCT_RESET } from '../../constants/productConstants';


const ProductsList = () => {

    // const [isApproved, setApproved] = useState(false);
    // const [isAvailable, setIsAvailable] = useState(false);
    const [reloadComponent, setReloadComponent] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();
    const params = useParams();

    const { error, products } = useSelector((state) => state.products);
    const { error: approveError, isApproved, isAvailable } = useSelector((state) => state.product);


    const handleApproved = (id) => {
        // dispatch(isApproved(id));
        dispatch(approveProduct(id));
        // window.location.reload();
        setReloadComponent(!reloadComponent);
    }

    const handleAvailable = (id) => {
        dispatch(availableProducts(id));
        setReloadComponent(!reloadComponent);
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isApproved) {
            alert.success("Product Approver Successfully");
            dispatch({ type: APPROVE_PRODUCT_RESET });
        }

        if (isAvailable) {
            alert.success("Product Approver Successfully");
            dispatch({ type: APPROVE_PRODUCT_RESET });
        }
        
        if (approveError) {
            alert.error(approveError);
            dispatch(clearErrors)
        }
        setReloadComponent(false);
        dispatch(getAdminProduct());
    }, [dispatch, alert, error, reloadComponent, isApproved, approveError, isAvailable])

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
                                <li><a href="#" className="active">Product List</a></li>
                            </ul>
                        </div>
                        <a href="#" className="report">
                            <i className="fa-solid fa-cloud-arrow-down"></i>
                            <span>Download CSV</span>
                        </a>
                    </div>
                    {/* <!-- End of Insights --> */}

                    <div className="bottom-data">
                        <div className="orders">
                            <div className="header-admin">
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                                <h3>Product List</h3>
                                <i className='bx bx-filter'></i>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            {/* Table   */}
                            <div class="container">
                                <table class="rwd-table">
                                    <tbody>
                                        <tr>
                                            <th>Product Id</th>
                                            <th>Product Name</th>
                                            <th>Stock</th>
                                            <th>Price</th>
                                            <th>Approval</th>
                                            <th>Availability</th>
                                            <th>Actions</th>
                                        </tr>
                                        {products && products.map(p => (
                                            <tr>
                                                <td data-th="Product Id">
                                                    {p._id}
                                                </td>
                                                <td data-th="Product Name">
                                                    {p.name}
                                                </td>
                                                <td data-th="Stock">
                                                    {p.Stock}
                                                </td>
                                                <td data-th="Price">
                                                    {p.price}
                                                </td>
                                                <td data-th="Approval">
                                                    <button onClick={() => handleApproved(p._id)} style={{ backgroundColor: p.approveStatus ? 'blue' : 'red' }}>
                                                        {p.approveStatus ? 'Approved' : 'Disapproved'}
                                                    </button>
                                                </td>
                                                <td data-th="Availability">
                                                    <button onClick={() => handleAvailable(p._id)} style={{ backgroundColor: p.availableStatus ? 'blue' : 'red' }}>
                                                        {p.availableStatus ? 'Available' : 'Unavailable'}
                                                    </button>
                                                </td>
                                                <td className='action' data-th="Actions">
                                                    <button style={{ backgroundColor: "green" }}><i class="fa-regular fa-pen-to-square"></i></button>
                                                    <button style={{ backgroundColor: "red" }}><i class="fa-regular fa-trash-can"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Fragment>
    )
}

export default ProductsList
