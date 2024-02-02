import './App.css';
import Home from './pages/home/index.jsx'
import Intendencia from './pages/intendencia/index.jsx'
import axios from 'axios'
import { Route, Routes } from "react-router-dom";
axios.defaults.baseURL = 'http://localhost:8000/api'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/intendencia' element={<Intendencia />} />

        
      </Routes >
    </div>
  );
}

export default App;
