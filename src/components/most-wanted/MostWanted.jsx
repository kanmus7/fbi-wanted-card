import React from 'react'
import '../../styles/mostWanted/MostWanted.css'
import { WantedCard } from './WantedCard'

const MostWanted = ({ data}) => {
    return (
        <div className="results-container">
            <div className="mostWanted-Container">
                {data.map((wanted, key) => (
                    <WantedCard
                        wanted={wanted}
                        id={wanted.uid}
                        key={key}
                    />
                ))}
            </div>
        </div>
    )
}

export default MostWanted