import React, { useState, useEffect } from 'react'
import Header from '../header/Header';
import FiltersNav from '../filters/FiltersNavbar';
import MostWanted from '../most-wanted/MostWanted';
import { WantedLayout } from '../most-wanted/WantedLayout';
import { Pagination } from '../pagination/Pagination';
import Buttons from '../pagination/Buttons';
import DataContext from '../../context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'
import Genre from '../filters/Genre';

function Main({ likeData, rejectData, setLikeData, setRejectData }) {
    const API = 'https://api.fbi.gov/wanted/v1/list'
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [displayBtn, setDisplayBtn] = useState(false)
    const [searchData, setSearchData] = useState('')
    const [maleClick, setMaleClick] = useState(false)
    const [femaleClick, setFemaleClick] = useState(false)

    useEffect(() => {
        GetAPI()
    }, [page])

    const GetAPI = async () => {
        setDisplayBtn(false)
        setLoading(false)
        try {
            let response = await fetch(`${API}?page=${String(page)}`)
            response = await response.json()
            setData(response.items.filter((item) => { return item.reward_text !== null && item.reward_text !== "" && item.reward_text !== "undefined" }))
        } catch (error) {
            setData([])
        }
        setLoading(true)
        setDisplayBtn(true)
    }

    function search(data) {
        if (maleClick) { return data.filter((criminal) => { return criminal.sex === 'Male' }) }

        if (femaleClick) { return data.filter((criminal) => { return criminal.sex === 'Female' }) }

        return data.filter((criminal) => criminal.title.toLowerCase().indexOf(searchData) > -1
        )
    }

    return (
        <DataContext.Provider value={{ setData, searchData, setSearchData, likeData, rejectData, setLikeData, setRejectData }}>
            <Header />
            <FiltersNav>
                <Genre setMaleClick={setMaleClick} setFemaleClick={setFemaleClick} />
            </FiltersNav>
            <WantedLayout>
                {loading ? (<MostWanted data={search(data)} />) : (<ReactBootStrap.Spinner animation="border" variant="light" className="spinner" />)}
            </WantedLayout>
            <Pagination>
                <Buttons page={page} setPage={setPage} displayBtn={displayBtn} />
            </Pagination>
        </DataContext.Provider>
    );
}

export default Main;
