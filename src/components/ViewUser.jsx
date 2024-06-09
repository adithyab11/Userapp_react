import React, { useEffect, useState } from 'react'
import NavUser from './NavUser'
import axios from 'axios'

const ViewUser = () => {
    const [data, setData] = useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            

            <NavUser />
            <br></br>
            <center><h1>VIEW USER</h1></center>
            <br></br>

            <table class="table table-bordered" align="center">

                <thead>
                    <tr>
                        <th scope="col">User id</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>{return    <tr>
                        <td scope="row">{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                      </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default ViewUser