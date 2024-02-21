import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Login = () => {
  const {loginUser} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    loginUser(email, password)
  }
  return (
<div className="account-pages my-5 pt-sm-5">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card overflow-hidden">
                    <div className="bg-primary bg-soft">
                        <div className="row">
                            <div className="col-7">
                                <div className="text-primary p-4">
                                    <h5 className="text-primary">Welcome Back !</h5>
                                    <p>Sign in to continue to Skote.</p>
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
                                  />
                                </div>
                              </div>
                              <div className="mt-3 d-grid">
                                <button className="btn btn-primary waves-effect waves-light" type="submit">
                                  Log In
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