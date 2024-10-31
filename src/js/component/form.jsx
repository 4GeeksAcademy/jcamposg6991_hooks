import React, { useState } from "react";

const Form = () => {

    const [email, setEmail] = useState("") //declarar estado
    const [password, setPassword] = useState("")
    const [data, setData] = useState([])

    function handleEmail(event) {
        setEmail(event.target.value)
    }

    // function handlePassword(event) {
    //     setPassword(event.target.value)
    // }

    // console.log(email);
    // console.log(password);

    //formulario

    function sendData(event) {
        event.preventDefault()
        console.log(email, password);
    }

    return (
        <div className="d-flex justify-content-center">
            <form className="w-50 text-center" onSubmit={sendData}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event)=>setPassword(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Form;