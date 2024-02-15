import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const AddWatchImage = () => {
    const { id } = useParams();
    const [thumbnail, setThumbnail] = useState(null);

    const handleFileChange = (event) => {
        setThumbnail(event.target.files[0]);
    };
    const navigate = useNavigate();
    const swal = require('sweetalert2')

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('watch_name', id); 
        formData.append('watch_image', thumbnail);

        fetch('https://timesculpt.pythonanywhere.com/dashboard/watch/image/create/', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            navigate(`/watch/detail/${id}`);
            swal.fire({
              title: "Watch Image Added",
              icon: "success",
              toast: true,
              timer: 6000,
              position: 'top-right',
              timerProgressBar: true,
              showConfirmButton: false
          })
        })
        .catch(error => {
            // Handle error
        });
    };

    return (
        <div className="main-content">

        <div className="page-content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Add watch</h4>
                        </div>
                    </div>
                </div>

        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>

                            <div className="mb-3 row">
                                <label htmlFor="watch_image" className="col-md-2 col-form-label">watch_image</label>
                                <div className="col-md-6">
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="watch_image"
                                        name="watch_image"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
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

export default AddWatchImage;
