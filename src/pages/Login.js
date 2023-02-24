import React from 'react'

export default function Login() {
  return (
        <form className='w-25 offset-4 mt-5'>
            <h1 className='offset-3'>Login Form</h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
        </form>
  )
}
