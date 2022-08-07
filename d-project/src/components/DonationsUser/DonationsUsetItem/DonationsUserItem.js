
const DonationsUserItem = ({donation}) => {

    return (
        <li>
            <p>Donated 5 $ for {donation.petName}</p>
        </li>
    );
};

export default DonationsUserItem;