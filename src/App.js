import { ToastContainer } from "react-toastify";
import Admin from "./Component/Admin/Admin";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Reset from "./Component/Reset/Reset";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
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
