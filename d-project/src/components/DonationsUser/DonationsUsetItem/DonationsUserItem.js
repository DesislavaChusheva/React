
const DonationsUserItem = ({ donation }) => {

    return (
        <div className="donations-div">
            <li className="donations-li">
                <p>You donated 5$ for {donation.petName}</p>
            </li>
        </div>
    );
};

export default DonationsUserItem;