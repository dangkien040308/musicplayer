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
import fairytail from "./music/fairytailremix.mp3"
import coaynoi from "./music/coaynoi.mp3"
import noaidoloixinloi from "./music/noaidoloixinloi.mp3"
import noinaycoanh from "./music/noinaycoanh.mp3"
import thacmac from "./music/thacmac.mp3"
import tinhsauthienthumuonloi from "./music/tinhsauthienthumuonloi.mp3"
import tinhyeumauhong from './music/tinhyeumauhong.mp3'
import vebenanh from './music/vebenanh.mp3'
import tinhve from './music/tinveremix.mp3'
import changthetimduocem from './music/changthetimduocem.mp3'
import haikhongbabay from './music/2037.mp3'


function App() {
  const [curentSongIndex , setCurrentSongIndex] = useState(0)
  
  

  const songs = [
    {
      src : coaynoi,
      title : "Cô Ấy Nói" ,
      artists : "Ngô Anh Đạt"
   },
   {
    src : haikhongbabay,
    title : "2037" ,
    artists : "Tuấn Võ"
   },
   {
    src : vebenanh,
    title : "Về Bên Anh" ,
    artists : "Jack"
 },
    {
       src : chill1,
       title : "3107" ,
       artists : "ft. Nâu , Duongg"
    },
    {
      src : fairytail,
      title : "Fairy Tail Remix" ,
      artists : "Quang Nhật"
   },
   {
    src : noinaycoanh,
    title : "Nơi Này Có Anh" ,
    artists : "Sơn Tùng"
 },
    {
      src : chuyedoita,
      title : "Chuyện Đôi Ta" ,
      artists : "Emcee L ft Muộii"
   },
   {
    src : tinhyeumauhong,
    title : "Tình Yêu Màu Hồng" ,
    artists : "Hồ Văn Quý x Xám"
 },
   {
    src : thacmac,
    title : "Thắc Mắc" ,
    artists : "Thịnh Suy"
  },
   {
    src : duongtoichoemve,
    title : "Đường Tôi Chở Em Về" ,
    artists : "buitruonglinh"
   },
   {
    src : tinhsauthienthumuonloi,
    title : "Tình Sầu Thiên Thu Muôn Lối" ,
    artists : "Doãn Hiếu"
 },
 {
  src : changthetimduocem,
  title : "Chẳng Thể Tìm Được Em" ,
  artists : "Reddy x Freak D"
},
   {
    src : matmoc,
    title : "Mặt Mộc" ,
    artists : "Phạm Nguyên Ngọc x VAnh x Ân Nhi"
   },
   {
    src : chill2,
    title : "3107 3" ,
    artists : "ft. 267 , Nâu , Duongg"
  },
   {
    src : minhcungnhaudongbang,
    title : "Mình Cùng Nhau Đóng Băng" ,
    artists : "Thùy Chi x FPT Polytechnic"
   },
   {
    src : tinhve,
    title : "Tinh Vệ Remix" ,
    artists : "Hứa Lam Tâm"
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
    src : noaidoloixinloi,
    title : "Nợ Ai Đó Lời Xin Lỗi" ,
    artists : "Bozitt"
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
