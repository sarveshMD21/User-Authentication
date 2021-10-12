import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';
import {
   
    Link
  } from "react-router-dom";
import bcrypt from 'bcryptjs'
export default function NewUser() {

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const [confirm,setConfirm]=useState();

   const history=useHistory();

    const HandleSubmit=(e)=>{
        e.preventDefault();
        if(pass===confirm){
            let old;
            old={pass};
            old=old.toString();
            let obj;
            async function getPassword(){
                const password=await bcrypt.hash(old,10);
                let val=await bcrypt.compare(old,password);
                console.log(val);
                obj={name,email,password,pass};
                let res=await axios.post("http://localhost:3001/User",obj);
            }
            getPassword();
            history.push("/");
        }
        else{
            alert("Please Enter the Correct Password");
        }
    }

    return (
        <div className="d-flex flex-column  mt-5">
            <h1 className="d-flex justify-content-center">Enter Your details</h1>
            <div className="d-flex justify-content-center">
                <form onSubmit={HandleSubmit}>
                <div className="mb-3">
                        <label for="Name" className="form-label">UserName</label>
                        <input type="text" className="form-control" id="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="Email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="Password1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="Password1" value={pass} onChange={(e)=>setPass(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="Password2" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="Password2" value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                       <button type="submit" className="btn btn-primary">Submit</button>
                       <Link  className="btn btn-danger" to="/">Go Back</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
