import React from 'react'

export default function Register() {

    let sendData = ()=>{

        let data ={
            "username": "nisha",
            "email": "nisha@gmail.com",
            "password": "nisha@123"
        }
        fetch(`http://localhost:1337/api/auth/local/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res)=>{res.json()})
        .then((data)=>{})
        .catch(()=>{});
    }

  return (
        <form className='w-25 offset-4 mt-5'>
            <h1 className='offset-2'>Register Form</h1>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name='username' className="form-control" id="username" aria-describedby="username" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" onClick= {sendData} className="btn btn-primary">Register</button>
        </form>
  )
}
