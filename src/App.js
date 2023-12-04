import './App.css';
import React from 'react'
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Index from './Pages/Home/Homescreen/Index';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Index/>}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
