import React, { useState } from 'react'
import NavUser from './NavUser'

const AddUser = () => {
    const[data,setData]=useState(
        {
            "id":"",
            "name":"",
            "age":"",
            "gender":"",
            "email":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavUser/>
        <br>
        </br>
        <center><h1>ADD USER</h1></center>
        <br></br>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">User id</label>
                    <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Age</label>
                    <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Gender</label>
                    <input type="text" className="form-control" name='gender' value={data.gender} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-16 col-xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={readValue}>Submit</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AddUser