import { useNavigate } from 'react-router-dom';

const BaseDialog = (content, url) => {

    const navigate = useNavigate();
    var isOpen = true

    const okClicked = () => {
        isOpen = false
        navigate(url)
    }


    return (
        <dialog open="isOpen">
            <p>{{ content }}</p>
            <button onClick={okClicked}>OK</button>
        </dialog>
    )
}

export default BaseDialog