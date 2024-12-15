import {Route, Routes} from 'react-router-dom'
import './App.css'
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
      <Route path='/view' element={<View />} />
      <Route path='/view-user' element={<ViewUser />} />
    </Routes>
    </>
  )
}

export default App
