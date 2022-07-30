import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from './components/Header/Header';
//import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import './App.css';



function App() {
  // return (
  //   <h1>TEST</h1>
  // )
  //const navigate = useNavigate();
  return (
    <div className="App">
      <Header />
      <main id="main-content">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/pets" element={<Pets />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/edit-pet" element={<EditPet />} />
          <Route path="/pet-details/:petId" element={<PetDetails />} />
          <Route path="/adoptions-pending" element={<X />} />
          <Route path="/adoptions-admin" element={<X />} />
          <Route path="/donations-admin" element={<X />} />
          <Route path="/adoptions/:userId" element={<X />} />
          <Route path="/donations/:userId" element={<X />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
