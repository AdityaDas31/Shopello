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
                            <table>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Name</th>
                                        <th>Stock</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            #jbkjbjfskjdfkjkjnkjn12525
                                        </td>
                                        <td>Product 1</td>
                                        <td>200</td>
                                        <td>$95.678,45 USD</td>
                                        <td className='action'>
                                            <button onClick={handleApproved} style={{ backgroundColor: isApproved ? 'blue' : 'red' }}>
                                                {isApproved ? 'Approved' : 'Disapproved'}
                                            </button>
                                            <button onClick={handleAvailable} style={{ backgroundColor: isAvailable ? 'blue' : 'red' }}>
                                                {isAvailable ? 'Available' : 'Unavailable'}
                                            </button>
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <img src="images/profile-1.jpg" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>14-08-2023</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="images/profile-1.jpg" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>14-08-2023</td>
                                        <td><span className="status process">Processing</span></td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>


                    </div>

                </main>
            </div>
        </Fragment>
    )
}

export default ProductsList
