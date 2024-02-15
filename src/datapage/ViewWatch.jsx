import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ViewWatch = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetchWatches();
    }, []);

    const swal = require('sweetalert2')
    const fetchWatches = async () => {
        try {
            const response = await axios.get('https://timesculpt.pythonanywhere.com/dashboard/watches/'); 
            console.log(response.data)
            setWatches(response.data); 
           
        } catch (error) {
            console.error('Error fetching watches:', error);
        }
    };
    function handleDelete(id) {
        if (window.confirm('Are you sure you want to delete this watch?')) {
          fetch(`https://timesculpt.pythonanywhere.com/dashboard/watches/${id}/delete/`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(response => {
            if (response.ok) {
                 
            swal.fire({
                title: "Remove Watch Successfully ",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false
            })
              setWatches(watches.filter(watch => watch.id !== id));
            } else {
              console.error('Error deleting watch:', response.status);
            }
          })
          .catch(error => {
            console.error('Error deleting watch:', error);
          });
        }
      }

    return (
        <div className="main-content">

        <div className="page-content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Watch View</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="row mb-3">
                            <div className="col-xl-3 col-sm-6 col-md-4">
                                <div className="mt-2">
                                    <h5>Watches</h5>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <form className="mt-4 mt-sm-0 float-sm-end d-sm-flex align-items-center">
                                    <div className="search-box me-2">
                                        <div className="position-relative">
                                            <input type="text" className="form-control border-0" placeholder="Search..." />
                                            <i className="bx bx-search-alt search-icon"></i>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                {watches.map((watch, index) => (
                    <div key={index} className="col-xl-3 col-sm-6 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="product-img position-relative">
                                    <div className="avatar-sm product-ribbon">
                                        <span className="avatar-title rounded-circle bg-danger">
                                            - {watch.discount} %
                                        </span>
                                    </div>
                                    <img src={'https://timesculpt.pythonanywhere.com/' + watch.watch_thumbnail} alt={watch.watch_name} className="img-fluid mx-auto d-block" />

                                </div>
                                <div className="mt-4 text-center">
                                    <h5 className="mb-3 text-truncate">
                                        <a href="javascript:void(0);" className="text-dark">{watch.watch_name}</a>
                                    </h5>
                                    <h5 className="my-0">
                                        <span className="text-muted me-2">
                                            <del>${watch.price}</del>
                                        </span>
                                        <b>${watch.actual_price}</b>
                                    </h5>
                                    <p className=' mt-2'>      
                                    <button className="btn btn-danger waves-effect waves-light mx-1" onClick={() => handleDelete(watch.id)}>Delete</button>
                                    
                                    
                                    <Link to={`detail/${watch.id}`} className="btn btn-primary waves-effect waves-light my-1">Detailed View</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="pagination pagination-rounded justify-content-center mt-3 mb-4 pb-1">
                        <li className="page-item disabled">
                            <a href="javascript: void(0);" className="page-link"><i className="mdi mdi-chevron-left"></i></a>
                        </li>
                        <li className="page-item">
                            <a href="javascript: void(0);" className="page-link">1</a>
                        </li>
                        <li className="page-item active">
                            <a href="javascript: void(0);" className="page-link">2</a>
                        </li>
                        <li className="page-item">
                            <a href="javascript: void(0);" className="page-link">3</a>
                        </li>
                        <li className="page-item">
                            <a href="javascript: void(0);" className="page-link">4</a>
                        </li>
                        <li className="page-item">
                            <a href="javascript: void(0);" className="page-link">5</a>
                        </li>
                        <li className="page-item">
                            <a href="javascript: void(0);" className="page-link"><i className="mdi mdi-chevron-right"></i></a>
                        </li>
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

export default ViewWatch;
