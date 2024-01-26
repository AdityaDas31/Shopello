import React, { Fragment, useState } from 'react';
import AdminPage from './AdminPage';


const ProductsList = () => {

    const [isApproved, setApproved] = useState(false);
    const [isAvailable, setIsAvailable] = useState(false);

    const handleApproved = () => {
        // Toggle the approval status
        setApproved(!isApproved);
    }

    const handleAvailable = () => {
        setIsAvailable(!isAvailable)
    }

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
                                        <tr>
                                            <td data-th="Product Id">
                                                65b08a9ae2852912072f36a3
                                            </td>
                                            <td data-th="Product Name">
                                                Product 1
                                            </td>
                                            <td data-th="Stock">
                                                20
                                            </td>
                                            <td data-th="Price">
                                                2000
                                            </td>
                                            <td data-th="Approval">
                                                <button onClick={handleApproved} style={{ backgroundColor: isApproved ? 'blue' : 'red' }}>
                                                    {isApproved ? 'Approved' : 'Disapproved'}
                                                </button>
                                            </td>
                                            <td data-th="Availability">
                                                <button onClick={handleAvailable} style={{ backgroundColor: isAvailable ? 'blue' : 'red' }}>
                                                    {isAvailable ? 'Available' : 'Unavailable'}
                                                </button>
                                            </td>
                                            <td className='action' data-th="Actions">
                                                <button style={{backgroundColor: "green"}}><i class="fa-regular fa-pen-to-square"></i></button>
                                                <button style={{backgroundColor: "red"}}><i class="fa-regular fa-trash-can"></i></button>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <td data-th="Supplier Code">
                                                UPS3449
                                            </td>
                                            <td data-th="Supplier Name">
                                                UPS South Inc.
                                            </td>
                                            <td data-th="Invoice Number">
                                                ASDF29301
                                            </td>
                                            <td data-th="Invoice Date">
                                                6/24/2016
                                            </td>
                                            <td data-th="Due Date">
                                                12/25/2016
                                            </td>
                                            <td data-th="Net Amount">
                                                $3,255.49
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-th="Supplier Code">
                                                BOX5599
                                            </td>
                                            <td data-th="Supplier Name">
                                                BOX Pro West
                                            </td>
                                            <td data-th="Invoice Number">
                                                ASDF43000
                                            </td>
                                            <td data-th="Invoice Date">
                                                6/27/2016
                                            </td>
                                            <td data-th="Due Date">
                                                12/25/2016
                                            </td>
                                            <td data-th="Net Amount">
                                                $45,255.49
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-th="Supplier Code">
                                                PAN9999
                                            </td>
                                            <td data-th="Supplier Name">
                                                Pan Providers and Co.
                                            </td>
                                            <td data-th="Invoice Number">
                                                ASDF33433
                                            </td>
                                            <td data-th="Invoice Date">
                                                6/29/2016
                                            </td>
                                            <td data-th="Due Date">
                                                12/25/2016
                                            </td>
                                            <td data-th="Net Amount">
                                                $12,335.69
                                            </td>
                                        </tr> */}
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
