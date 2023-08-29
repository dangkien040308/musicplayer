import { useState } from "react";
import "./App.css"
import Player from "./component/player";
import ListItem from "./component/listItem";

import chill1 from "./music/3107.mp3"
import chill2 from "./music/31073.mp3"
import chuyedoita from "./music/chuyendoita.mp3"
import duongtoichoemve from "./music/duongtoichoemve.mp3"
import matmoc from "./music/matmoc.mp3"
import minhcungnhaudongbang from "./music/minhcungnhaudongbang.mp3"
import phaohoa from "./music/phaohoa.mp3"
import toi from "./music/toi.mp3"
import truockhituoitrenaydongtoi from "./music/truockhituoitrenaydongloi.mp3"
import yeu5 from "./music/yeu5.mp3"

function App() {
  const [curentSongIndex , setCurrentSongIndex] = useState(0)
  

  const songs = [
    {
       src : chill1,
       title : "3107" ,
       artists : "ft. Nâu , Duongg"
    },
    {
       src : chill2,
       title : "3107 3" ,
       artists : "ft. 267 , Nâu , Duongg"
    },
    {
      src : chuyedoita,
      title : "Chuyện Đôi Ta" ,
      artists : "Emcee L ft Muộii"
   },
   {
    src : duongtoichoemve,
    title : "Đường Tôi Chở Em Về" ,
    artists : "buitruonglinh"
   },
   {
    src : matmoc,
    title : "Mặt Mộc" ,
    artists : "Phạm Nguyên Ngọc x VAnh x Ân Nhi"
   },
   {
    src : minhcungnhaudongbang,
    title : "Mình Cùng Nhau Đóng Băng" ,
    artists : "Thùy Chi x FPT Polytechnic"
   },
   {
    src : phaohoa,
    title : "Pháo Hoa" ,
    artists : "Phí Phương Anh x RIN9 x MiiNa"
   },
   {
    src : toi,
    title : "Tối" ,
    artists : "Dkayz ft. Chulong | prod. Lee"
   },
   {
    src : truockhituoitrenaydongtoi,
    title : "Trước Khi Tuổi Trẻ Này Đóng Lối" ,
    artists : "Ngắn x Xám x Dick"
   },
   {
    src : yeu5,
    title : "Yêu 5" ,
    artists : "Rhymastic"
   },

  ]
  
  

   

  return (
   <div className="main">
      <div className="listPlayer">
        {songs.map( (song,id) => (
              <ListItem title={song.title} artist={song.artists} key={id} 
              active = {id === curentSongIndex ? true : false} />
        ))}
      </div>
      <Player setCurrentSongIndex = {setCurrentSongIndex} curentSongIndex={curentSongIndex} songs={songs}/>
    </div>
  );
}

export default App;
