
const DonationsAdminItem = ({donation}) => {

    return (
        <li>
            <p>{donation.donor} donated 5 $ for {donation.petName}</p>
        </li>
    );
};

export default DonationsAdminItem;