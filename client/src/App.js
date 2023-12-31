import {Routes, Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Policy from './components/pages/Policy';
import Pagenotfound from './components/pages/Pagenotfound';
import Register from './components/pages/Auth/Register';
import Login from './components/pages/Auth/Login';
import Dashboard from './components/pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './components/pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/Admin';
import AdminDashboard from './components/pages/Admin/AdminDashboard';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<PrivateRoute/>}>
          <Route path='user' element={<Dashboard/>}/>
        </Route>
        <Route path='/dashboard' element={<AdminRoute/>}>
          <Route path='admin' element={<AdminDashboard/>}/>
        </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
      </Routes>
    </>
  );
}

export default App;
