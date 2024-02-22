import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddWatch = () => {
    const [watchData, setWatchData] = useState({
        watch_name: '',
        watch_thumbnail: '',
        brands: '',
        price: '',
        discount: '',
        watch_details: '',
        gender: '',
        dial_type: '',
        dial_colour: '',
        dial_shape: '',
        style: '',
        strap_material: ''
    });
    const navigate = useNavigate();
    const swal = require('sweetalert2');
    const [isSubmitting, setIsSubmitting] = useState(false);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setWatchData({ ...watchData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setWatchData({ ...watchData, watch_thumbnail: file });
    };
    
   

    const createWatch = async (watch) => {
        const formData = new FormData();
        for (let key in watch) {
          formData.append(key, watch[key]);
        }
        try {
          const response = await axios.post('https://timesculpt.pythonanywhere.com/dashboard/watches/create/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log('Watch added successfully:', response.data);
          navigate('/watch');
          swal.fire({
            title: "Watch Added",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        })
        } catch (error) {
          console.error('Error adding watch:', error);
        }
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        
      setIsSubmitting(true);
        const formData = new FormData();
        for (let key in watchData) {
          console.log(key);
          formData.append(key, watchData[key]);
          console.log(watchData); 
        }
        try {
          const response = await createWatch(watchData);
        } catch (error) {
          console.error('Error adding watch:', error);
        }
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
                                <label htmlFor="watch_name" className="col-md-2 col-form-label">Watch name</label>
                                <div className="col-md-6">
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="watch_name"
                                        name="watch_name"
                                        value={watchData.watch_name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label htmlFor="watch_thumbnail" className="col-md-2 col-form-label">watch_thumbnail</label>
                                <div className="col-md-6">
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="watch_thumbnail"
                                        name="watch_thumbnail"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="brands" className="col-md-2 col-form-label">Brands</label>
                                <div className="col-md-6">
                                    <select
                                        className="form-select"
                                        id="brands"
                                        name="brands"
                                        value={watchData.brands}
                                        onChange={handleChange}
                                    >
                                        <option selected>SELECT</option>
                                        <option value="Armani Exchange">Armani Exchange</option>
                                        <option value="Calvin Klein">Calvin Klein</option>
                                        <option value="Casio">Casio</option>
                                        <option value="Fossil">Fossil</option>
                                        <option value="G-Shock">G-Shock</option>
                                        <option value="Hugo Boss">Hugo Boss</option>
                                        <option value="Kenneth Cole">Kenneth Cole</option>
                                        <option value="Movado">Movado</option>
                                        <option value="Obaku">Obaku</option>
                                        <option value="Police">Police</option>
                                        <option value="Titan">Titan</option>
                                        <option value="Tommy Hilfiger">Tommy Hilfiger</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="price" className="col-md-2 col-form-label">Price</label>
                                <div className="col-md-6">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        name="price"
                                        value={watchData.price}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label htmlFor="discount" className="col-md-2 col-form-label">Discount</label>
                                <div className="col-md-6">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="discount"
                                        name="discount"
                                        value={watchData.discount}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>            
                            <div className="mb-3 row">
                                <label htmlFor="watch_details" className="col-md-2 col-form-label">Watch Details</label>
                                <div className="col-md-6">
                                    <textarea
                                        rows={8} 
                                        className="form-control"
                                        id="watch_details"
                                        name="watch_details"
                                        value={watchData.watch_details}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
         
                        <div className="mb-3 row">
                            <label htmlFor="gender" className="col-md-2 col-form-label">Gender</label>
                            <div className="col-md-6">
                                <select
                                    className="form-select"
                                    id="gender"
                                    name="gender"
                                    value={watchData.gender}
                                    onChange={handleChange}
                                >
                                    <option selected>SELECT</option>
                                    <option value="Men">Men</option>
                                    <option value="Unisex">Unisex</option>
                                    <option value="Women">Women</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="dial_type" className="col-md-2 col-form-label">Dial Type</label>
                            <div className="col-md-6">
                                <select
                                    className="form-select"
                                    id="dial_type"
                                    name="dial_type"
                                    value={watchData.dial_type}
                                    onChange={handleChange}
                                >
                                    <option selected>SELECT</option>
                                    <option value="Analog">Analog</option>
                                    <option value="Digital">Digital</option>
                                    <option value="Roman">Roman</option>
                                    <option value="Smart">Smart</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="dial_colour" className="col-md-2 col-form-label">Dial Colour</label>
                            <div className="col-md-6">
                                <select
                                    className="form-select"
                                    id="dial_colour"
                                    name="dial_colour"
                                    value={watchData.dial_colour}
                                    onChange={handleChange}
                                >
                                    <option selected>SELECT</option>
                                    <option value="Black">Black</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Pink">Pink</option>
                                    <option value="White">White</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="dial_shape" className="col-md-2 col-form-label">Dial Shape</label>
                            <div className="col-md-6">
                                <select
                                    className="form-select"
                                    id="dial_shape"
                                    name="dial_shape"
                                    value={watchData.dial_shape}
                                    onChange={handleChange}
                                >
                                    <option selected>SELECT</option>
                                    <option value="Oval">Oval</option>
                                    <option value="Polygon">Polygon</option>
                                    <option value="Rectangle">Rectangle</option>
                                    <option value="Rectangular">Rectangular</option>
                                    <option value="Round">Round</option>
                                    <option value="Square">Square</option>
                                    <option value="Triangle">Triangle</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="style" className="col-md-2 col-form-label">Style</label>
                            <div className="col-md-6">
                                <select
                                    className="form-select"
                                    id="style"
                                    name="style"
                                    value={watchData.style}
                                    onChange={handleChange}
                                >
                                    <option selected>SELECT</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Bling">Bling</option>
                                    <option value="Casual">Casual</option>
                                    <option value="Dressy">Dressy</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Fitness">Fitness</option>
                                    <option value="Formal">Formal</option>
                                    <option value="Minimalistic">Minimalistic</option>
                                    <option value="Party">Party</option>
                                    <option value="Sporty">Sporty</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="strap_material" className="col-md-2 col-form-label">Strap Material</label>
                            <div className="col-md-6">
                                <select
                                    className="form-select"
                                    id="strap_material"
                                    name="strap_material"
                                    value={watchData.strap_material}
                                    onChange={handleChange}
                                >
                                    <option selected>SELECT</option>
                                    <option value="Acetate">Acetate</option>
                                    <option value="Alloy">Alloy</option>
                                    <option value="Ceramic">Ceramic</option>
                                    <option value="Fabric">Fabric</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Leather">Leather</option>
                                    <option value="Metal">Metal</option>
                                    <option value="Nylon">Nylon</option>
                                    <option value="PU">PU</option>
                                    <option value="Plastic">Plastic</option>
                                    <option value="Rubber">Rubber</option>
                                    <option value="Silicon">Silicon</option>
                                    <option value="Textile">Textile</option>
                                </select>
                            </div>
                        </div>
                        
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? "Wait..." : "Submit"}
                    </button>
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

export default AddWatch;
