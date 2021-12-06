import React from 'react'
import anonymousImg from '../../resources/anonymous.png'

export const PrintWantedCard = ({ wantedData, key }) => {
    return (
        <div className="most-wanted" key={key} id={wantedData.uid}>
            <div className="imgContainer">
                <img src={wantedData.images[0].thumb === 'undefined' || wantedData.images[0] === null ? anonymousImg : wantedData.images[0].thumb} alt="wantedImg" />
            </div>
            <div className="criminaInfo-Container">
                <p>{`-Title: ${wantedData.title === null || wantedData.title === 'undefined' ? 'Not found' : wantedData.title}`}</p>
                <p>{`-Nationality: ${wantedData.nationality === null || wantedData.nationality === 'undefined' ? 'Not found' : wantedData.nationality}`}</p>
                <p>{`-Genre: ${wantedData.sex === null || wantedData.sex === 'undefined' ? 'Not found' : wantedData.sex}`}</p>
                <p>{`-Reward: ${wantedData.reward_text}`}</p>
                <p>{`-Subject: ${wantedData.subjects[0] === null || wantedData.subjects[0] === 'undefined' ? 'Not found' : wantedData.subjects[0]}`}</p>
                <p>{`-Description: ${wantedData.description === null || wantedData.description === 'undefined' || wantedData.description === '' ? 'Not found' : wantedData.description}`}</p>
            </div>
        </div>
    )
}
