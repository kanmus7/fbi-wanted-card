import React, { useContext } from 'react'
import likeImg from '../../resources/like.png'
import dislikeImg from '../../resources/dislike.png'
import DataContext from '../../context/Context'
import { useLocalStorage } from '../../customhooks/useLocalStorage'
import { PrintWantedCard } from './PrintWantedCard'

export const WantedCard = (props, key) => {
    const wantedData = props.wanted
    const likeKey = `like-${props.id}`
    const dislikeKey = `dislike-${props.id}`
    const [like, setLike] = useLocalStorage(likeKey, false)
    const [dislike, setDislike] = useLocalStorage(dislikeKey, false)
    const { likeData, rejectData, setLikeData, setRejectData } = useContext(DataContext)

    const createData = (wantedData, isData) => {
        isData ? setLikeData([...likeData, wantedData]) : setRejectData([...rejectData, wantedData])
    }

    const deleteData = (wantedData, isData) => {
        isData ? setLikeData(likeData.filter(data => data.uid !== wantedData.uid)) : setRejectData(rejectData.filter(data => data.uid !== wantedData.uid))
    }

    const isDataIn = (wantedData, isData) => {
        switch (isData) {
            case true: return likeData.filter(data => data.uid === wantedData.uid).length
            case false: return rejectData.filter(data => data.uid === wantedData.uid).length
        }
    }

    const onSetLike = (wantedData) => {
        isDataIn(wantedData, true) ? deleteData(wantedData, true) : createData(wantedData, true)

        if (isDataIn(wantedData, false)) {
            deleteData(wantedData, false)
        }
        if (like) {
            setLike(false)
        } else {
            setLike(true)
            setDislike(false)
        }
    }

    const onSetDislike = (wantedData) => {
        isDataIn(wantedData, false) ? deleteData(wantedData, false) : createData(wantedData, false)
        if (isDataIn(wantedData, true)) {
            deleteData(wantedData, true)
        }
        if (dislike) {
            setDislike(false)
        } else {
            setDislike(true)
            setLike(false)
        }
    }

    return (
        <div className="most-wanted">
            <PrintWantedCard wantedData={wantedData} key={key}/>
            <div className="Dis-Likes">
                <div onClick={() => onSetLike(wantedData)} className={`like-${like && 'style'}`}>
                    <img src={likeImg} alt="likeOption" />
                </div>
                <div onClick={() => onSetDislike(wantedData)} className={`dislike-${dislike && 'style'}`}>
                    <img src={dislikeImg} alt="likeOption" />
                </div>
            </div>
        </div>
    )
}
