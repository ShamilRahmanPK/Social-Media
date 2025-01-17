import {Route, Routes} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Landing from './pages/Landing'
import Auth from './pages/Auth'
import Login from './pages/Login'
import Home from './pages/Home'
import AllPost from './pages/AllPost'
import EditProfile from './pages/EditProfile'
import UserProfile from './pages/UserProfile'
import AllUsers from './pages/AllUsers'
import AddPost from './pages/AddPost'
import View from './pages/View'
import ViewUser from './pages/ViewUser'
import AdminHome from './admin/AdminHome'
import AdminPostValidation from './admin/AdminPostValidation'
import AdminPostView from './admin/AdminPostView'
import AdminAllPost from './admin/AdminAllPost'
import AdminAllUser from './admin/AdminAllUser'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/all-post' element={<AllPost />} />
      <Route path='/all-users' element={<AllUsers />} />
      <Route path='/edit-profile' element={<EditProfile />} />
      <Route path='/profile' element={<UserProfile />} />
      <Route path='/add-post' element={<AddPost />} />
      <Route path="/view/:id" element={<View />} />
      <Route path='/view-user/:userId' element={<ViewUser />} />
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='/admin-post-validate' element={<AdminPostValidation/>}/>
      <Route path="/admin/post-view/:id" element={<AdminPostView />} />
      <Route path="/admin/all-post" element={<AdminAllPost />} />
      <Route path="/admin/all-user" element={<AdminAllUser />} />
    </Routes>
    </>
  )
}

export default App
