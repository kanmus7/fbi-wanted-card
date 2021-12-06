import React from 'react'
import '../../styles/button/Buttons.css'

const Buttons = ({ page, setPage, displayBtn }) => {
    return (
        <div className="buttons-Container">
            <button onClick={() => setPage(page - 1)} className={`backBtn-${(page === 1 && 'displayNone')}`} hidden={!displayBtn}>Back </button>
            <button onClick={() => setPage(page + 1)} hidden={!displayBtn}>Next page</button>
        </div>
    )
}

export default Buttons