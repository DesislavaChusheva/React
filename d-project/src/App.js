import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useContext } from "react";

import { AuthContext } from "./contexts/AuthContext";
import { AuthProvider } from './contexts/AuthContext';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
//import Register from './components/Register/Register';
import Pets from "./components/Home/Pets/Pets";
import AddPet from "./components/AddPet/AddPet";
import EditPet from "./components/EditPet/EditPet";
import PetDetails from "./components/PetDetails/PetDetails";
import EditUser from "./components/EditUser/EditUser";
import Four0Three from "./components/Errors/403";
import Logout from "./components/Logout/Logout";


import './App.css';

const Register = lazy(() => import('./components/Register/Register'));

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<Four0Three />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={
              <Suspense fallback={<span>Loading...</span>}>
                <Register />
              </Suspense>} />
            <Route path="/edit-profile/:userId" element={<EditUser />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/add-pet" element={<AddPet />} />
            <Route path="/edit-pet/:petId" element={<EditPet />} />
            <Route path="/pet-details/:petId" element={<PetDetails />} />
            {/* <Route path="/adoptions-pending" element={<X />} />
          <Route path="/adoptions-admin" element={<X />} />
          <Route path="/donations-admin" element={<X />} />
          <Route path="/adoptions/:userId" element={<X />} />*/}
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
