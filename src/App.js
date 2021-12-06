import React from 'react'
import Main from './components/main/Main';
import { LikeView } from './components/filters/like/LikeView';
import { DislikeView } from './components/filters/dislike/DislikeView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { NotFound } from './components/notfound/NotFound';
import { useLocalStorage } from './customhooks/useLocalStorage';


function App() {
  const likeDataKey = 'likeKey'
  const rejectDataKey = 'rejectKey'
  const [likeData, setLikeData] = useLocalStorage(likeDataKey, [])
  const [rejectData, setRejectData] = useLocalStorage(rejectDataKey, [])
  
  return (
    <Routes>
      <Route path="/" element={<Main likeData={likeData} rejectData={rejectData} setLikeData={setLikeData} setRejectData={setRejectData} />} />
      <Route path="/check" element={<LikeView likeData={likeData}/>} />
      <Route path="/rejected" element={<DislikeView rejectData={rejectData}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
