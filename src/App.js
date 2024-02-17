import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from "./utils/ProtectedRoute"
import { AuthProvider } from './context/AuthContext'
import { Login, Register} from "./pages"
import WatchAdd from "./fullpage/WatchAdd"
import Watch from './fullpage/Watch'
import Detail from './fullpage/Detail'
import WatchEdit from './fullpage/WatchEdit'
import WatchImageAdd from './fullpage/WatchImageAdd'
import Orders from './fullpage/Orders'
import Dashboard from './fullpage/Dashboard'
const App = () => {
  return (
    <div id="layout-wrapper" className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route 
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" exact element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>} />
                        <Route path="/watch/add" exact element={<WatchAdd />} />
                        <Route path="/watch" exact element={<Watch />} />
                        <Route path="/orders" exact element={<ProtectedRoute><Orders /></ProtectedRoute>} />
                        <Route
                        path="/watch/detail/:id"
                        exact
                        element={<Detail/>}
                        />
                        <Route
                        path="/watch/edit/:id"
                        exact
                        element={<WatchEdit/>}
                        />
                        <Route
                        path="/watch/add/:id"
                        exact
                        element={<WatchImageAdd/>}
                        />
                    </Routes>
                </AuthProvider>
            </Router>
    </div>
  )
}

export default App