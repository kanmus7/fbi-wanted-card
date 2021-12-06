import React from 'react'
import * as boostrap from 'react-bootstrap'
import { Link } from "react-router-dom";

const Dislike = () => {
    return (
        <boostrap.Navbar.Text>
            <Link to='/rejected'>Rejected</Link>
        </boostrap.Navbar.Text>
    )
}

export default Dislike