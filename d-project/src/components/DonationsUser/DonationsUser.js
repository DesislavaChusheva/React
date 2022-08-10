import { useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as donationService from '../../services/DonationsService'
import DonationsUserItem from './DonationsUsetItem/DonationsUserItem'
import { useContext } from 'react';

const DonationsUser = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        donationService.getAllDonations().then(donations => setDonations(donations));
    }, [])

    const { user } = useContext(AuthContext);

    let userDonations = []


    donations.forEach(d => {
        if (d.donor === user.email) {
            userDonations.push(d)
        }
    });


    return (
        <section id="pets-page">
            <h1>DONATIONS</h1>
            {userDonations.length > 0
                ? userDonations.map(d => <DonationsUserItem key={d._id} donation={d} />)
                : <h2 className="no-donations">There are no donations from you!</h2>}
        </section>
    );
}

export default DonationsUser