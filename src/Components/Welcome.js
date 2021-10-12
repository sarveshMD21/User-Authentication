import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
    return (
        <div className="d-flex  flex-column ">
            <h1 className="d-flex justify-content-center">Welcome</h1>
            <div className="d-flex justify-content-center">
                <Link className="btn btn-primary" to="/">Log OUT</Link>
            </div>
        </div>
    )
}
