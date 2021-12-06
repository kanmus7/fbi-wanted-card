import React from 'react'
import Header from '../../header/Header';
import { Link } from "react-router-dom";
import { PrintWantedCard } from '../../most-wanted/PrintWantedCard';

export const DislikeView = ({ rejectData }) => {
    return (
        <div>
            <Header />
            <div className="results-container">
                <Link to="/" className="backLink">Back</Link>
            </div>
            <div className="results-container">
                <div className="mostWanted-Container">
                    {rejectData.map((wantedData, key) => (
                        <PrintWantedCard wantedData={wantedData} key={key}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
