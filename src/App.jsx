import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
