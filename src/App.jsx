import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "@/pages/Home";
import Intendencia from "./pages/Intendencia";
import UserPanel from "./pages/UserPanel";
import UserOrders from "./components/UserOrders";
import UserAccount from "./components/UserAccount";

import axios from "axios";
import Footer from "./sections/Footer";

// axios.defaults.baseURL = "https://admin.ervzla.com/api";
axios.defaults.baseURL = "http://localhost:8000/api";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intendencia" element={<Intendencia />} />
        <Route exact path="/panel-de-usuario" element={<UserPanel />}>
          <Route exact path="cuenta" element={<UserAccount />} />
          <Route exact path="pedidos" element={<UserOrders />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
