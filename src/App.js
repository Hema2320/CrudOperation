import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Headers/Headers";
import Home from "./pages/Home/Home";
import StudentHome from "./pages/PasswordFlow/Home"
import StudentRegister from "./pages/Register/Studentregister";
import Register from "./components/userLoginandRegister/Register";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import ForgetPassword from './pages/PasswordFlow/ForgetPassword';
import ChangePassword from './pages/PasswordFlow/ChangePassword';
import Login from './components/userLoginandRegister/Login'
import ProtectedRoutes from "./services/ProtectedRoutes";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/forgotpassword' element={<StudentHome/>} /> 
        <Route path='/studentsregister' element={<StudentRegister />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
        <Route path="/reset-password" element={<ForgetPassword />} />
        <Route path="/user/reset/:id/:token" element={<ChangePassword />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
       <Route path="/" element={<Login/>}/> 
      </Routes>
    </>
  );
}

export default App;
