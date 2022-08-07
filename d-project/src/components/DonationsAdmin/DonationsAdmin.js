import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as petService from '../../services/PetService'
import { AuthContext } from '../../contexts/AuthContext';
import AdoptionStatus from '../../enums/AdoptionStatus'
import * as adoptionService from '../../services/AdoptionService'
import * as donationService from '../../services/DonationsService'
import DonationsAdminItem from './DonationsAdminItem/DonationsAdminItem';
import { useContext } from 'react';

const DonationsAdmin = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        donationService.getAllDonations().then(donations => setDonations(donations));
    }, [])

    return (
        <section id="pets-page">
            <h1>PENDING ADOPTIONS</h1>
            {donations.length > 0
                ? donations.map(d => <DonationsAdminItem key={d._id} donation={d} />)
                : <h2 className="no-donations">There are no donations!</h2>}
        </section>
    );
}

export default DonationsAdmin