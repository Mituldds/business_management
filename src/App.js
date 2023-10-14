import Admin from "./Component/Admin/Admin";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Reset from "./Component/Reset/Reset";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
