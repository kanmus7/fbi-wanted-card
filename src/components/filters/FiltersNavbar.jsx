import React from 'react'
import * as boostrap from 'react-bootstrap'
import '../../styles/filter/Filters.css'
import Like from './like/Like'
import Dislike from './dislike/Dislike'
import Search from '../header/Search'

const FiltersNav = ({children}) => {


    return (
        <boostrap.Navbar bg="light" variand="dark" className="Navbar">
            <boostrap.Container>
                <boostrap.Navbar.Brand > <h2 className="filters-title">FBI MOST WANTED</h2></boostrap.Navbar.Brand>
                <boostrap.Navbar.Collapse id="basic-navbar-nav">
                    <boostrap.Nav className="me-auto">
                        <Like />
                        <Dislike />
                        {children}
                    </boostrap.Nav>
                    <Search />
                </boostrap.Navbar.Collapse>
            </boostrap.Container>
        </boostrap.Navbar>
    )
}

export default FiltersNav
