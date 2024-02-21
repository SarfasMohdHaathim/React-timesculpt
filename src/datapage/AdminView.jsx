import React, { useState, useEffect } from 'react';
const ViewDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchusers();
    }, []);

    const fetchusers = async () => {
        try {
            const response = await fetch('https://timesculpt.pythonanywhere.com/dashboard/staff/'); 
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    console.log('users:', users);
    return (
        <div className="main-content">

        <div className="page-content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Users</h4>
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
                                    <th className="align-middle">User ID</th>
                                    <th className="align-middle">Username</th>
                                    <th className="align-middle">Phone</th>
                                    <th className="align-middle">Email</th>
                                    <th className="align-middle">Address</th>

                                    </tr>
                                </thead>
                                <tbody>{users.map(user => (
                                <tr key={user.id}>
                                    
                                    <td><a href="javascript: void(0);" className="text-body fw-bold">#{user.id}</a></td>
                                    <td>{user.username}</td>
                                    <td>{user.address && user.address.phone ? user.address.phone : 'N/A'}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    {user.address && (
                                    <div>
                                        <p>Country: {user.address.country}</p>
                                        <p>City: {user.address.city}</p>
                                        <p>Street Address: {user.address.street_address}</p>
                                        <p>Zipcode: {user.address.zipcode}</p>
                                    </div>
                                )}
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

export default ViewDashboard;
