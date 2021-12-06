import React from 'react'
import { Link } from "react-router-dom";
import Header from '../../header/Header';
import { PrintWantedCard } from '../../most-wanted/PrintWantedCard';


export const LikeView = ({ likeData }) => {
    return (
        <div>
            <Header />
            <div className="results-container">
                <Link to="/" className="backLink">Back</Link>
            </div>
            <div className="results-container">
                <div className="mostWanted-Container">
                    {likeData.map((wantedData, key) => (
                        <PrintWantedCard wantedData={wantedData} key={key}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
