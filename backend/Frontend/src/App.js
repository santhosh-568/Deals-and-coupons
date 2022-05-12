import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Couponsview from './components/Couponsview';
import Footer from './components/Footer';
import News from './components/News';
import Admin from './components/Admin';
import AddCoupon from './components/AddCoupon';
import About from './components/About';






const App = () => {

  return (


      <>
     

          <Routes>

              <Route path='/Login' element={<Login />} />

              <Route path='/signup' element={<Register />} />

              <Route path='/' element={<Login />} />

              <Route path='/News' element={<News />} />

              <Route path='/Home' element={<Home />} />

              <Route path='/Admin' element={<Admin />} />

              <Route path='/About' element={<About />} />
              
              <Route path='/AddCoupon' element={<AddCoupon />} />
              
             <Route path='/Couponsview' element={<Couponsview />} />

            
           </Routes>
           <Footer/>

      </>

  )

}
export default App;








