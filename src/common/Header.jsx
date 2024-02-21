import { Link } from 'react-router-dom';
import React, {useState, useContext, useEffect} from 'react'
import useAxios from "../utils/useAxios"
import { jwtDecode } from 'jwt-decode'
import AuthContext from '../context/AuthContext'


const Header = () => {
    const [response, setResponse] = useState("")
    const api = useAxios();
    const token = localStorage.getItem("authTokens")
    const {logoutUser} = useContext(AuthContext)
  
    
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
        <>
            <header id="page-topbar">
            <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>
                    </div>

                    <div className="d-flex">

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                                <span className="d-none d-xl-inline-block ms-1" key="t-henry">{full_name}</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">{username}</span></a>
                                <a className="dropdown-item" href="#"><i className="bx bx-mail-send font-size-16 align-middle me-1"></i> <span key="t-my-wallet">{email}</span></a>
                                <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">
                                <Link onClick={logoutUser} className='text-danger'>Logout</Link></span></a>
                            </div>
                            </div>
                    </div>
                </div>
            </header>

            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    {/* Sidebar content */}
                    <div id="sidebar-menu">
                        {/* Sidebar menu content */}
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title" key="t-menu">Menu</li>
                            <li>
                                <a href="javascript: void(0);" className="has-arrow">
                                    <i className="bx bx-user"></i>
                                    <span key="t-dashboards">Users</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to='/' >View Users</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" className="has-arrow">
                                    <i className="bx bxs-watch"></i>
                                    <span key="t-dashboards">Watches</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to='/watch' >View Watches</Link></li>
                                    <li><Link to='/watch/add'>Add Watches</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" className="has-arrow">
                                    <i className="bx bx-receipt"></i>
                                    <span key="t-dashboards">Orders</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to='/orders' >View Orders</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" className="has-arrow">
                                    <i className="bx bx-receipt"></i>
                                    <span key="t-dashboards">Admin</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to='/orders' >View Admin</Link></li>
                                    <li><Link to='/admin/add' >Add Admin</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
