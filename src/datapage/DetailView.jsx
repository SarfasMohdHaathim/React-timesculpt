import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
const DetailView = () => {
    const [activeTab, setActiveTab] = useState('product-1');
    const [watch, setWatch] = useState(null);
    const [watcheimage, setWatchesImage] = useState([]);
    const { id } = useParams();
    const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    };

    useEffect(() => {
        axios.get(`https://timesculpt.pythonanywhere.com/dashboard/watches/${id}/`)
          .then(response => {
            setWatch(response.data);
          })
          .catch(error => {
            console.log(error);
          });
          fetchWatchesImage();
        }, [id]);

        const fetchWatchesImage = async () => {
            try {
                const response = await axios.get(`https://timesculpt.pythonanywhere.com/dashboard/watch/image/${id}/`);
                setWatchesImage(response.data);
                console.log(watcheimage)
            } catch (error) {
                console.error('Error fetching watches:', error);
            }
        };        

    return (
        <div className="main-content">

        <div className="page-content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Watch {watch && watch.watch_name}</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            {/* Product Images */}
                            <div className="col-xl-4">
                                {/* Product Image Tabs */}
                                <div className="product-detai-imgs">
                                        {/* Tab Content */}
                                            <div className="text-center">
                                                <div>
                                                    <img src={`https://timesculpt.pythonanywhere.com/${watch && watch.watch_thumbnail}`} alt="" className="img-fluid mx-auto d-block" />
                                                </div>
                                    </div>
                                </div>
                            </div>
                            {/* Product Details */}
                            
                            <div className="col-xl-8">
                                <div className="mt-4 mt-xl-3">
                                    <a href="javascript: void(0);" className="text-primary">{watch && watch.brands}</a>
                                    <h4 className="mt-1 mb-3">{watch && watch.watch_name}</h4>

                                    <h6 className="text-success text-uppercase">{watch && watch.discount} % Off</h6>
                                    <h5 className="mb-4">Price : <span className="text-muted me-2"><del>${watch && watch.price} </del></span> <b>${watch && watch.actual_price} </b></h5>
                                    <p className="text-muted mb-4">{watch && watch.watch_details}
                                         </p>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div>
                                            <Link className="btn btn-primary waves-effect waves-light mt-2 me-1" 
                                                to={`/watch/edit/${id}`}><i className="bx bx-file me-2"></i> Edit {watch && watch.watch_name}</Link>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                {/* Product Image Tabs */}
                                <div className="product-detai-imgs">
                                    <div className="row">
                                        {/* Tab Navigation */}
                                        <h4 className="mt-5 mb-3">{watch && watch.watch_name} Images</h4>
                                        <div className="col-md-2 col-sm-3 col-4">
                                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                {watcheimage.map((watch, index) => (
                                                    <a key={index} 
                                                    className={`nav-link ${activeTab === `product-${index + 1}` ? 'active' : ''}`} 
                                                    onClick={() => handleTabChange(`product-${index + 1}`)} 
                                                    role="tab" 
                                                    aria-selected={activeTab === `product-${index + 1}`}>
                                                        <img src={`https://timesculpt.pythonanywhere.com/${watch.watch_image}`} alt={`Watch ${index + 1}`} className="img-fluid mx-auto d-block rounded" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                        {/* Tab Content */}
                                        <div className="col-md-7 offset-md-1 col-sm-9 col-8">
                                           {/* Inside the tab-content div */}
                                                <div className="tab-content" id="v-pills-tabContent">
                                                    {/* Tab Pane  */}
                                                    {watcheimage.map((watch, index) => (
                                                    <div className={`tab-pane fade ${activeTab === `product-${index + 1}` ? `show active` : ''}`} id="product-${index + 1}" role="tabpanel" aria-labelledby="product-1-tab">
                                                        <div>
                                                            <img src={`https://timesculpt.pythonanywhere.com/${watch.watch_image}`} alt={`Watch ${index + 1}`} className="img-fluid mx-auto d-block" />
                                                        </div>
                                                    </div>
                                                    ))}
                                                </div>

                                            {/* Buttons */}
                                            <div className="text-center">
                                                <Link className="btn btn-primary waves-effect waves-light mt-2 me-1" 
                                                to={`/watch/add/${id}`}><i className="bx bx-file me-2"></i> Add Watch Images</Link>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Product Details */}
                            <div className="col-xl-6">
                        <div className="mt-5">
                            <h5 className="mb-3">Specifications :</h5>

                            <div className="table-responsive">
                                <table className="table mb-0 table-bordered">
                                    <tbody>
                                        <tr>
                                            <th scope="row" style={{ width: '400px' }}>Brand</th>
                                            <td>{watch && watch.brands}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Gender</th>
                                            <td>{watch && watch.gender}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dial Type</th>
                                            <td>{watch && watch.dial_type}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dial Colour</th>
                                            <td>{watch && watch.dial_colour}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dial Shape </th>
                                            <td>{watch && watch.dial_shape}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Style </th>
                                            <td>{watch && watch.style}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Strap Material </th>
                                            <td>{watch && watch.strap_material}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                            </div>
                            
                        </div>
                        {/* end row */}
                        
                    </div>
                </div>
                {/* end card */}
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

export default DetailView;
