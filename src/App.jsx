import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "@/pages/Home";
import Intendencia from "./pages/Intendencia";
import UserPanel from "./pages/UserPanel";
import UserOrders from "./components/UserOrders";
import UserAccount from "./components/UserAccount";
import Footer from "./sections/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EventsDescription from "./sections/EventsDescription";

import axios from "axios";
// axios.defaults.baseURL = "https://admin.ervzla.com/api";
axios.defaults.baseURL = "http://localhost:8000/api";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evento/:slug" element={<EventsDescription />} />
        <Route path="/intendencia" element={<Intendencia />} />
        <Route exact path="/panel-de-usuario" element={<UserPanel />}>
          <Route exact path="cuenta" element={<UserAccount />} />
          <Route exact path="pedidos" element={<UserOrders />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
