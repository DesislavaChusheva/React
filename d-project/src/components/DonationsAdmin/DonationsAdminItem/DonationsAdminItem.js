
const DonationsAdminItem = ({ donation }) => {

    return (
        <div className="donations-div">
            <li className="donations-li">
                <p><strong>{donation.donor}</strong> donated 5$ for <strong>{donation.petName}</strong></p>
            </li>
        </div>
    );
};

export default DonationsAdminItem;