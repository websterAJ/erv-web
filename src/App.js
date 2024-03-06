import './App.css';
import Home from './pages/home/index.jsx'
import Intendencia from './pages/intendencia/index.jsx'
import User from './pages/user/index.jsx';
import axios from 'axios'
import { Route, Routes } from "react-router-dom";

// axios.defaults.baseURL = 'https://admin.ervzla.com/api'
axios.defaults.baseURL = 'http://localhost:8000/api'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/intendencia' element={<Intendencia />} />
        <Route exact path='/usuario' element={<User />} />
      </Routes >
    </div>
  );
}

export default App;
