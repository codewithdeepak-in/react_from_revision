import { useParams, useLocation } from "react-router-dom"


const Contact = () => {
    const locaiton = useLocation();

    console.log(locaiton.key);
    
    const param = useParams();

    console.log(param)

    return (
        <div>
            Contact
        </div>
    )
}

export default Contact