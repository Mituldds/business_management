import { ToastContainer } from "react-toastify";
import Admin from "./Component/Admin/Admin";
// import Login from "./Pages/Login/index.jsx";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Component/Home";
import Reset from "./Component/Reset/Reset";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
import Layout from "./Component/Layout/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPwd from "./Pages/ForgotPwd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPwd />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/layout" element={<Layout />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
