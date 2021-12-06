import React from 'react'
import '../../styles/notFound/NotFound.css'
import {Link} from 'react-router-dom'

export const NotFound = () => (
    <>
        <div className="ErrorContainer">
            <div className="titleContainer">
                <h2> 404 Page Not Found</h2>
                <Link to="/" className="backLink">Go back</Link>
            </div>
        </div>
    </>
)