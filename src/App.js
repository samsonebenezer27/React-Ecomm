import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Nav from './comp/Nav'
import Footer from './comp/Footer';
import Header from './comp/Header';
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  // logical works

  const [array, setarray] = useState([])

  console.log(array);

















  // ui work
  return (
    <div className="App">


      <ToastContainer />
      {/* <Nav></Nav> */}
      <BrowserRouter>
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home array={array} setarray={setarray}></Home>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Product' element={<Product array={array} setarray={setarray}></Product>}></Route>
          <Route path='/Cart' element={<Cart array={array} setarray={setarray}></Cart>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
