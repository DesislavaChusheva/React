import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Pets from "./components/Home/Pets/Pets";
import AddPet from "./components/AddPet/AddPet";
import EditPet from "./components/EditPet/EditPet";
import PetDetails from "./components/PetDetails/PetDetails";
import EditUser from "./components/EditUser/EditUser";

import './App.css';



function App() {
  //const navigate = useNavigate();
  return (
    <div className="App">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit-profile/:userId" element={<EditUser />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/edit-pet/:petId" element={<EditPet />} />
          <Route path="/pet-details/:petId" element={<PetDetails key={"35c62d76-8152-4626-8712-eeb96381bea8"} userId={"35c62d76-8152-4626-8712-eeb96381bea8"}/>} />
          {/* <Route path="/adoptions-pending" element={<X />} />
          <Route path="/adoptions-admin" element={<X />} />
          <Route path="/donations-admin" element={<X />} />
          <Route path="/adoptions/:userId" element={<X />} />*/}
        </Routes>
      </main>
    </div>
  );
}

export default App;
