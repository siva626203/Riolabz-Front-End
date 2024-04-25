import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Route,Routes } from 'react-router-dom';
import Login from './pages/login'
import Home from './pages/home';
import Register from './pages/register';
import Navbar from './components/navbar'
import Protected from './components/protected';
import AddProduct from './components/addProduct';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Protected />} />
        <Route path="/add" element={<AddProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
