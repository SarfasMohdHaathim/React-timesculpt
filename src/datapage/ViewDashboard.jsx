import React, {useState, useEffect} from 'react'
import useAxios from "../utils/useAxios"
import { jwtDecode } from 'jwt-decode'

const ViewDashboard = () => {
    const [users, setUsers] = useState([]);
    const [transactions, setTransaction] = useState([]);
    const [total, setTotalAmountPaid] = useState([]);
    const [ordercount, setOrderCount] = useState([]);
    useEffect(() => {
        fetchusers();
        fetchTransaction();
        fetchOrders();
    }, []);
    const fetchOrders = async () => {
        try {
            const response = await fetch('https://timesculpt.pythonanywhere.com/dashboard/orders/'); 
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            
            setOrderCount(data.order_count);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    const fetchTransaction = async () => {
        try {
            const response = await fetch('https://timesculpt.pythonanywhere.com/dashboard/transaction/'); 
            if (!response.ok) {
                throw new Error('Failed to fetch transactions');
            }
            const data = await response.json();
            setTransaction(data.transactions);
            setTotalAmountPaid(data.total_amount_paid);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };
    const fetchusers = async () => {
        try {
            const response = await fetch('https://timesculpt.pythonanywhere.com/dashboard/users/'); 
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const [response, setResponse] = useState("")
    const api = useAxios();
    const token = localStorage.getItem("authTokens")
  
    
    const decode = jwtDecode(token)
    let user_id = decode.user_id
    let username = decode.username
    let email = decode.email
    let full_name = decode.full_name
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get("/test/")
          setResponse(response.data.response)
  
        } catch (error) {
          console.log(error)
          setResponse("Something Went Wrong")
        }
      }
      
      fetchData()
      
    }, [])
  
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
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                            <div className="float-end dropdown ms-2">
                                <a className="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                </a>
                            </div>
                            <div>
                                <div className="mb-4 me-3">
                                <i className="mdi mdi-account-circle text-primary h1"></i>
                                </div>
                                <div>
                                <h5>{username}</h5>
                                <p className="text-muted mb-1">{email}</p>
                                <p className="text-muted mb-0">User Id: #00A5{user_id}</p>
                                </div>
                            </div>
                            </div>
                            
                            <div className="card-body border-top">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div>
                                                    <p className="fw-medium mb-2">Balance :</p>
                                                    <h4>$ {total}</h4>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mt-4 mt-sm-0">
                                                    <p className="fw-medium mb-2">Payment Through :</p>
                                                    <div className="d-inline-flex align-items-center mt-1">
                                                        
                                                        <a href="javascript: void(0);" className="m-1">
                                                            Razorpay
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-footer bg-transparent border-top">
                                        <div className="text-center">
                                            <a href="javascript: void(0);" className="btn btn-primary me-2 w-md">All Orders</a>
                                        </div>
                                    </div>
                        </div>
                        </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Transactions</h4>

                                <div className="tab-content mt-4">
                                    <div className="tab-pane active" id="transactions-all-tab" role="tabpanel">
                                    <div className="table-responsive" data-simplebar style={{maxHeight: '250px'}}>
                                        <table className="table align-middle table-nowrap">
                                        <tbody>
                                        {transactions.map(transaction => (
                                        <tr  key={transaction.id}>
                                            <td style={{width: '50px'}}>
                                            {transaction.paid ? (
                                            <div className="font-size-22 text-success">
                                                <i className="bx bx-down-arrow-circle"></i>
                                            </div>
                                        ) : (
                                            <div className="font-size-22 text-danger">
                                                <i className="bx bx-down-arrow-circle"></i>
                                            </div>
                                        )}

                                            </td>
                            
                                            <td>
                                                <div className="text-end">
                                                <h5 className="font-size-14 mb-0">{transaction.user.username}</h5>
                                                </div>
                                            </td>
                            
                                            <td>
                                                <div className="text-end">
                                                <h5 className="font-size-14 text-muted mb-0">${transaction.amount}</h5>
                                                </div>
                                            </td>
                                            </tr>
                                             ))}
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                                                <i className="bx bx-copy-alt"></i>
                                            </span>
                                        </div>
                                        <h5 className="font-size-14 mb-0">Orders</h5>
                                    </div>
                                    <div className="text-muted mt-4">
                                        <h4>{ordercount} <i className="mdi mdi-chevron-up ms-1 text-success"></i></h4>
                                        <div className="d-flex">
                                            <span className="badge badge-soft-success font-size-12"> + 0.2% </span> <span className="ms-2 text-truncate">From previous period</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>

        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">

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
