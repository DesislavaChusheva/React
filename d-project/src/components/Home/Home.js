import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/PetService'
import * as adoptionService from '../../services/AdoptionService'
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import AdoptionStatus from '../../enums/AdoptionStatus'


const Home = () => {



    // const adoptionRequestData = {
    //     _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
    //     petId: "126777f5-3277-42ad-b874-76d043b069cb",
    //     status: AdoptionStatus.Pending
    // }
    // adoptionService.createAdoptionRequest(adoptionRequestData)





    return (
        <section>
            <h4><b>HELP</b> a pet!</h4>
            <h3><b>SAVE</b> a pet!</h3>
            <h1><b>LOVE</b> a pet!</h1>
        </section>
    );
};

export default Home;