import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Route,Routes } from 'react-router-dom';
import Login from './pages/login'
import Home from './pages/home';
import Register from './pages/register';
import Navbar from './components/navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
