import React, {useState, useContext} from 'react'
import AuthContext from '../context/AuthContext'

const Login = () => {
  const {loginUser} = useContext(AuthContext)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const email = e.target.email.value
    const password = e.target.password.value

    loginUser(email, password)
    setTimeout(() => {
      setIsSubmitting(false); 
    }, 20000);
  }
  return (
<div className="account-pages my-5 pt-sm-5">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card overflow-hidden">
                    <div className="bg-primary bg-soft">
                        <div className="row">
                            <div className="col-10">
                                <div className="text-primary p-4">
                                    <h5 className="text-primary">Welcome Back !</h5>
                                    <p>Sign in to continue to React Dashboard.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pt-0"> 
                        <div className="p-2">
                            <form onSubmit={handleSubmit}>
                              <div className="mb-3">
                                <label htmlFor="email">Email:</label>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  required
                                  className="form-control"
                                  placeholder="Enter email"
                                  value={'admin@gmail.com'}
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="password">Password:</label>
                                <div className="input-group auth-pass-inputgroup">
                                  <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    required
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={'admin123'}
                                  />
                                </div>
                              </div>
                              <div className="mt-3 d-grid">
                                <button type="submit" className="btn btn-primary waves-effect waves-light" disabled={isSubmitting}>
                                  {isSubmitting ? "Wait..." : "Login"}
                                </button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login