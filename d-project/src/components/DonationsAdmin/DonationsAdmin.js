import { useState, useEffect } from 'react';
import * as donationService from '../../services/DonationsService'
import DonationsAdminItem from './DonationsAdminItem/DonationsAdminItem';

const DonationsAdmin = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        donationService.getAllDonations().then(donations => setDonations(donations));
    }, [])

    return (
        <section id="pets-page">
            <h1>DONATIONS</h1>
            <ul className="donations-ul">
                {donations.length > 0
                    ? donations.map(d => <DonationsAdminItem key={d._id} donation={d} />)
                    : <h2 className="no-donations">There are no donations!</h2>}
            </ul>
        </section>
    );
}

export default DonationsAdmin