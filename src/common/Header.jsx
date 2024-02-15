import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header id="page-topbar">
            <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>
                    </div>

                    <div className="d-flex">

                        <div className="dropdown d-none d-lg-inline-block ms-1">
                            <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                                <i className="bx bx-fullscreen"></i>
                            </button>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                                <i className="bx bx-cog bx-spin"></i>
                            </button>
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
                                <a href="javascript: void(0);" className="has-arrow waves-effect">
                                    <i className="bx bx-user"></i>
                                    <span key="t-dashboards">Users</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to='/' >View Users</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect">
                                    <i className="bx bxs-watch"></i>
                                    <span key="t-dashboards">Watches</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to='/watch' >View Watches</Link></li>
                                    <li><Link to='/watch/add'>Add Watches</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect">
                                    <i className="bx bx-receipt"></i>
                                    <span key="t-dashboards">Orders</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to='/orders' >View Orders</Link></li>
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
