import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ViewOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('https://timesculpt.pythonanywhere.com/dashboard/orders/'); 
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    console.log('Orders:', orders);
    return (
        <div className="main-content">

        <div className="page-content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Orders</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        {/* Header Section */}
                        <div className="row mb-2">
                            {/* Search Box */}
                            <div className="col-sm-4">
                                <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <i className="bx bx-search-alt search-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className="table-responsive">
                            <table className="table align-middle table-nowrap table-check">
                                <thead className="table-light">
                                    <tr>
                                    <th className="align-middle">Order ID</th>
                                    <th className="align-middle">User</th>
                                    <th className="align-middle">Product</th>
                                    <th className="align-middle">Ordered Date</th>
                                    <th className="align-middle">Amount</th>
                                    <th className="align-middle">Status</th>
                                    <th className="align-middle">Address</th>

                                    </tr>
                                </thead>
                                <tbody>{orders.map(order => (
                                <tr key={order.id}>
                                    
                                    <td><a href="javascript: void(0);" className="text-body fw-bold">#{order.payment.razorpay_order_id}</a></td>
                                    <td>{order.user.username}</td>
                                    <td>{order.product.watch_name}</td>
                                    <td>{order.ordered_date}</td>
                                    <td>${order.payment.amount}</td>
                                    <td>
                                        <span className={`badge badge-pill badge-soft-${order.payment.paid ? 'success' : 'danger'} font-size-12`}>
                                            {order.payment.paid ? 'Paid' : 'Unpaid'}
                                        </span>
                                    </td>
                                    <td>
                                        <p>{order.user.address ? (
                                    <div>
                                        <p>{order.user.address.country}</p>
                                        <p>{order.user.address.city}</p>
                                        <p>{order.user.address.street_address}</p>
                                        <p>{order.user.address.zipcode}</p>
                                    </div>
                                ) : (
                                    <p>N/A</p>
                                )}

                                        </p>
                                    </td>
                                </tr>
                            ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Section */}
                        <ul className="pagination pagination-rounded justify-content-end mb-2">
                            {/* Pagination Items */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div> 
    </div>

    
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <script>document.write(new Date().getFullYear())</script> © React Dashboard.
                </div>
                <div className="col-sm-6">
                    <div className="text-sm-end d-none d-sm-block">
                        Design & Develop by Sarfas
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>




    );
};

export default ViewOrders;
