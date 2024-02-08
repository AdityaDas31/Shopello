import React, { Fragment } from 'react';
import AdminPage from './AdminPage';

const Sellers = () => {
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
                                <li><a href="#" className="active">Sellers</a></li>
                            </ul>
                        </div>
                        <a href="#" className="report">
                            <i className="fa-solid fa-cloud-arrow-down"></i>
                            <span>Download CSV</span>
                        </a>
                    </div>

                    {/* <!-- Insights --> */}
                    {/* <ul className="insights">
                        <li>
                            <i className="fa-regular fa-calendar-check"></i>
                            <span className="info">
                                <h3>
                                    1,074
                                </h3>
                                <p>Paid Order</p>
                            </span>
                        </li>
                        <li><i className="fa-regular fa-eye"></i>
                            <span className="info">
                                <h3>
                                    3,944
                                </h3>
                                <p>Site Visit</p>
                            </span>
                        </li>
                        <li><i className="fa-brands fa-searchengin"></i>
                            <span className="info">
                                <h3>
                                    14,721
                                </h3>
                                <p>Searches</p>
                            </span>
                        </li>
                        <li><i className="fa-solid fa-money-bill-trend-up"></i>
                            <span className="info">
                                <h3>
                                    $6,742
                                </h3>
                                <p>Total Sales</p>
                            </span>
                        </li>
                    </ul> */}
                    {/* <!-- End of Insights --> */}

                    <div className="bottom-data">
                        <div className="orders">
                            <div className="header-admin">
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                                <h3>Recent Orders</h3>
                                <i className='bx bx-filter'></i>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Order Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="images/profile-1.jpg" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>14-08-2023</td>
                                        <td><span className="status completed">Completed</span></td>
                                    </tr>
                                    <tr>
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
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>

                </main>
            </div>
        </Fragment>
  )
}

export default Sellers