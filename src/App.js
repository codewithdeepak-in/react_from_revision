
import { BrowserRouter, Link, Routes, Route, Navigate} from "react-router-dom";
import About from './about';
import Contact from './contact';

const App = () => {

    let user = true;

    return (

        <>

            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={{
                            pathname: '/about',
                            hash: '#deepak',
                            search: '?search=true'
                        }}>About</Link></li>
                        <li><Link to="/contact/34">Contact</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<About />}>
                        About
                    </Route>
                    <Route path="/contact/:id"  element={<Contact />}></Route>

                </Routes>

            </BrowserRouter>
            <h3>Hello World</h3>
        </>
    )


}

export default App;