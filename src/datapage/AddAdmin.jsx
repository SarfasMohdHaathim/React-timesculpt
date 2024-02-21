import React, {useState, useContext} from 'react'
import AuthContext from "../context/AuthContext"


const AddAdmin = () => {
    const [full_name, setFull_name] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const {registerUser} = useContext(AuthContext)
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      console.log(full_name);
      console.log(email);
      console.log(username);
  
      registerUser(full_name, email, username, password, password2);
      setTimeout(() => {
        setIsSubmitting(false); 
      }, 2000);
    };
  

    return (
        <div className="main-content">

        <div className="page-content">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Add Staff User</h4>
                        </div>
                    </div>
                </div>

        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                                <label htmlFor="full_name" className="col-md-2 col-form-label">Full Name</label>
                                <div className="col-md-6">
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="full_name"
                                        name="full_name"
                                        onChange={(e)=>setFull_name(e.target.value)}
                                    />
                                </div>
                            </div>
                        <div className="mb-3 row">
                                <label htmlFor="email" className="col-md-2 col-form-label">Email</label>
                                <div className="col-md-6">
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        <div className="mb-3 row">
                                <label htmlFor="username" className="col-md-2 col-form-label">Username</label>
                                <div className="col-md-6">
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="username"
                                        name="username"
                                        onChange={(e)=>setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                        <div className="mb-3 row">
                                <label htmlFor="password" className="col-md-2 col-form-label">Password</label>
                                <div className="col-md-6">
                                    <input
                                        className="form-control"
                                        type="password"
                                        id="password"
                                        name="password"
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        <div className="mb-3 row">
                                <label htmlFor="password2" className="col-md-2 col-form-label">Confrim Password</label>
                                <div className="col-md-6">
                                    <input
                                        className="form-control"
                                        type="password"
                                        id="password2"
                                        name="password2"
                                        onChange={(e)=>setPassword2(e.target.value)}
                                    />
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

export default AddAdmin;
