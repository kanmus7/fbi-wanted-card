import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const Genre = ({ setMaleClick, setFemaleClick}) => {

  const onSetMaleClick = () =>{
    setMaleClick(true)
    setFemaleClick(false)
  }

  const onSetfemaleClick = () =>{
    setFemaleClick(true)
    setMaleClick(false)
  }

  const onAllClick = () =>{
    setFemaleClick(false)
    setMaleClick(false)
  }

  return (
    <NavDropdown title="Genre" id="basic-nav-dropdown">
      <li><a  className="male-option" onClick={onSetMaleClick}>Male</a></li>
      <li><a className="female-option" onClick={onSetfemaleClick}>Female</a></li>
      <li><a className="female-option" onClick={onAllClick}>Male/Female</a></li>
    </NavDropdown>
  )
}

export default Genre