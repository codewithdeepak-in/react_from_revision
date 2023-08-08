import React, { useState } from 'react';


function UseState(){

    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    
    
    function handleChange(event){
        setForm({
          ...form,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(form)
    }

    return(
        <>
            <h4>Hello UseState Hook Form using UseState</h4>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Enter Your Name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <br />
              
                <div>
                    <label htmlFor="email">Email </label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Enter Your Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {form.name}
            <br />
            {form.email}

        </>
    )

}


export default UseState;