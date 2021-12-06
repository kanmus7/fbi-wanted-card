import React from 'react'
import * as boostrap from 'react-bootstrap'
import { useContext } from 'react'
import DataContext from '../../context/Context'

const Search = () => {
  const {searchData ,setSearchData} = useContext(DataContext)

  return (
    <boostrap.Form className="d-flex">
      <boostrap.FormControl
        type="search"
        placeholder="Search"
        className="form-control-lg"
        aria-label="Search"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)} 
      />
    </boostrap.Form>
  )
}

export default Search