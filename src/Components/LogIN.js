import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
export default function LogIN() {

    const [name,setName]=useState();
    const [password,setPassword]=useState();
    const [users,setUsers]=useState();
    const [person,setPerson]=useState();
    const history=useHistory();
    let val={name};
    let check={password};
    let fl=0;
    //val=val.toString();
    //console.log(val.name);
    useEffect(()=>{
        async function getData(){
        let res=await axios.get("http://localhost:3001/User")
        .then(res=>{setUsers(res.data)});}
        getData();
    },[])

    const HandelSubmit=(e)=>{
        e.preventDefault();
       
        {users.map((data)=>{
            const {name,email,password}=data;
            if(val.name==name){
            fl=fl+=1;
          setPerson(data);
               }
        })}
        if(!fl)
        alert("Incorrect Username");
        else{
            if(person){
                if(person.pass==check.password)
                history.push("/welcome");
                else
                alert("Incorrect password");
            }
            /*async function user(){
                let res=await bcrypt.compare(check.password,person.password);
                console.log(check.password);
            }
            user();*/
        }
    }
     
    return (
        <div className="d-flex flex-column mt-5">
              <h1 className="d-flex justify-content-center">Log In Page</h1>
            <div className="d-flex justify-content-center">
                <form onSubmit={HandelSubmit} >
                <div className="mb-3">
                        <label for="Name" className="form-label">UserName</label>
                        <input type="text" className="form-control" id="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="Password1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="Password1" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                       <button  type="submit" className="btn btn-primary">Log IN</button>
                       <Link   className="btn btn-danger" to="/">Go back</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


