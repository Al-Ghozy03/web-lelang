import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectRoute from "./component/protect_route";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Cart from "./pages/cart";
import Dashboard from "./pages/dashboard";
import Detail from "./pages/detail";
import Today from "./pages/today";
import Profile from "./pages/profile";
import Search from "./pages/search";
import Kategori from "./pages/kategori";
import Penawaran from "./pages/penawaran";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<ProtectRoute children={<Dashboard />} />}
      />
      {/* <Route path="/cart" element={<ProtectRoute children={<Cart />} />} /> */}
      <Route path="/today" element={<ProtectRoute children={<Today />} />} />
      <Route path="/search" element={<ProtectRoute children={<Search />} />} />
      <Route path="/kategori" element={<ProtectRoute children={<Kategori />} />} />
      <Route
        path="/profile"
        element={<ProtectRoute children={<Profile />} />}
      />
      <Route
        path="/detail/:id"
        element={<ProtectRoute children={<Detail />} />}
      />
      <Route
        path="/penawaran/:id"
        element={<ProtectRoute children={<Penawaran />} />}
      />

      <Route path="/" element={<Navigate replace to={"/dashboard"} />} />
    </Routes>
  );
}
