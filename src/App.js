import React, { useState } from 'react';

const App = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState({
        name: '',
        email: '',
        password: ''
    })

    function checkvalidation(){
        let valid = true;
        
        let formerror = {...error}
        

        if(!formData.name){
            formerror.name = "Enter Your Name";
            valid = false;
        }else{
            formerror.name = '';
            valid = true;
        }
        if(!formData.email){
            formerror.email = "Please enter your email";
            valid = false;
        }else{
            formerror.email = '';
            valid = true;
        }
        if(!formData.password){
            formerror.password = "Please Enter Your Password";
            valid = false;
        }else if(formData.password.length < 6){
            formerror.password = "Password must be at least 6 characters";
            valid = false;
        }else{
            formerror.password = '';
            valid = true;
        }
        console.log(formerror);

        setError(formerror);

        return valid;
    }

    function handleSubmit(event){
        event.preventDefault();
        if(checkvalidation()){
            console.log(formData);
        }
    }

    function handleChange(event){
        const {name, value} = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value}))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                        onChange={handleChange}
                    />
                    {error.name && <span className="error" >*{error.name}</span> }
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                        type="email"
                        className="form-control" 
                        name="email"
                        onChange={handleChange}
                    />

                    {error.email && <span className="error" >*{error.email}</span> }
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        name="password"
                        onChange={handleChange}
                    />
                    {error.password && <span className="error" >*{error.password}</span> }

                </div>
                <div className="mb-3">
                    <hr />
                   <button className="btn btn-primary btn-lg w-100">Submit Form</button>
                </div>
            </form>
        </div>
    );

}

export default App;