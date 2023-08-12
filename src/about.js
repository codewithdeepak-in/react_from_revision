import {  useNavigate ,useSearchParams  } from "react-router-dom";


const About = () => {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    console.log(searchParams.get('search'))

    return(
        <>
            <h3>Hello World</h3>
            <button onClick={() => navigate('/contact')}>Home</button>
        </>
    )

}

export default About;