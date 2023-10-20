import { ToastContainer } from "react-toastify";
import Admin from "./Component/Admin/Admin";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Component/Layout/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPwd from "./Pages/ForgotPwd";
import Reset from "./Pages/Reset";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPwd />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/admin/*" element={<Layout />} />
        {/* <Route
          path="/admin"
          element={
            <Layout>
              <Admin />
            </Layout>
          }
        /> */}

        {/* <Route path="/layout/*" element={<Layout />} /> */}
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
