import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Home() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid d-flex justify-content-between">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="d-flex justif-content-between">
         <Link className=" nav-link active" to="/login">Log IN</Link>
         <Link className="nav-link active" to="/new">Register</Link>
    </div>
  </div>
</nav>
    )
}
