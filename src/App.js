import { useState } from "react";
import "./App.css"
import './component/responsive.css'
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
import trochuyenvoithoigian from './music/trochuyenvoithoigian.mp3'
import anhnhora from './music/anhnhora.mp3'
import awakening from './music/awakening.mp3'
import baotienmotmobinhyen from './music/baotienmotmobinhyen.mp3'
import blank from './music/blank.mp3'
import buocquamuacodon from './music/buocquamuacodon.mp3'
import buocquanhau from './music/buocquanhau.mp3'
import candyland from './music/candyland.mp3'
import chinapipa from './music/candyland.mp3'
import closetothesun from './music/closetothesun.mp3'
import comethru from './music/comethru.mp3'
import cuoithoi from './music/cuoithoi.mp3'
import doubletake from './music/doubletake.mp3'
import escape from './music/escape(vexentoremix).mp3'
import flyaway from './music/flyaway.mp3'
import giacungnhauladuoc from './music/giacungnhauladuoc.mp3'
import holo from './music/holo(wontollaremix).mp3'
import ipromise from './music/ipromise.mp3'
import jackpot from './music/jackpot.mp3'
import lalung from './music/lalung.mp3'
import matbiec from './music/matbiec.mp3'
import maylangthang from './music/maylangthang.mp3'
import monody from './music/monody.mp3'
import motthuothanhbinh from './music/motthuothanhbinh.mp3'
import neffex from './music/neffex.mp3'
import nevada from './music/nevada.mp3'
import neverbealone from './music/lalung.mp3'
import ngaunhien from './music/ngaunhien.mp3'
import phieubong from './music/phieubong.mp3'
import  quanhungtiengve from './music/quanhungtiengve.mp3'
import riseup from './music/riseup.mp3'
import somethingjustlikethis from './music/somethingjustlikethis.mp3'
import spektrem from './music/spektrem.mp3'
import summertime from './music/summertime.mp3'
import sunburst from './music/sunburst.mp3'
import thatgirl from './music/thatgirl.mp3'
import thecalling from './music/thecalling.mp3'
import thejourney from './music/thejourney.mp3'
import thenights from './music/thenights.mp3'
import tuyam from './music/tuyam.mp3'
import unity from './music/unity.mp3'
import vianhdaucobiet from './music/vianhdaucobiet.mp3'
import waitingforlove from './music/waitingforlove.mp3'
import whydoi from './music/whydoi.mp3'
import windfall from './music/windfall.mp3'


function App() {
  const [currentSongIndex , setCurrentSongIndex] = useState(0)
  const [isPlaying,setIsPlaying] = useState(false)
  

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
    src : trochuyenvoithoigian,
    title : "Trò Chuyện Với Thời Gian" ,
    artists : "Tryle"
   },
   {
    src : anhnhora,
    title : "Anh Nhớ Ra" ,
    artists : " Vũ. (Feat. Trang) / Official Audio"
 },
 {
  src : buocquamuacodon,
  title : "Bước Qua Mùa Cô Đơn" ,
  artists : "Vũ"
 },
   {
    src : vebenanh,
    title : "Về Bên Anh" ,
    artists : "Jack"
 },
 {
  src : lalung,
  title : "Lạ Lùng" ,
  artists : "Vũ"
 },
 {
  src : motthuothanhbinh,
  title : "Một Thuở Thanh Bình" ,
  artists : "Tùng TeA, Tuyết, TaynguyenSound"
 },
 {
  src : matbiec,
  title : "Mắt Biếc" ,
  artists : "TaynguyenSound, Tùng TeA, PC"
 },
 {
  src : maylangthang,
  title : "Mây Lang Thang" ,
  artists : "TaynguyenSound, Tùng TeA, PC"
 },
 {
  src : ngaunhien,
  title : "Ngẫu Nhiên" ,
  artists : "PC, Tofu, VoVanDuc"
 },
 {
  src : phieubong,
  title : "Phiêu Bồng" ,
  artists : "Tofu"
 },
 {
  src : quanhungtiengve,
  title : "Qua Những Tiếng Ve" ,
  artists : "tofutns, VoVanDuc, TaynguyenSound"
 },
 {
  src : giacungnhauladuoc,
  title : "Già Cùng Nhau Là Được" ,
  artists : "Tea, PC"
 },
 {
  src : comethru,
  title : "Comethru" ,
  artists : "Jeremy Zucker"
 },
 {
  src : doubletake,
  title : "Double Take" ,
  artists : "Dhruv"
 },
 {
  src : somethingjustlikethis,
  title : "Something Just Like This" ,
  artists : "The Chainsmokers,Coldplay"
 },
 {
  src : thatgirl,
  title : "That Girl" ,
  artists : "Olly Murs"
 },
 {
  src : thenights,
  title : "The Nights" ,
  artists : "Acivii"
 },
 {
  src : waitingforlove,
  title : "Waiting For Love" ,
  artists : "Acivii"
 },
    {
       src : chill1,
       title : "3107" ,
       artists : "ft. Nâu, Duongg"
    },
    {
      src : buocquanhau,
      title : "Bước Qua Nhau" ,
      artists : "Vũ"
     },
     {
      src : tuyam,
      title : "Túy Âm" ,
      artists : "Xesi, Masew, Nhật Nguyễn"
     },
     {
      src : cuoithoi,
      title : "Cưới Thôi" ,
      artists : "Masew"
     },
     {
      src : chinapipa,
      title : "China PiPa" ,
      artists : "V.A"
     },
    {
      src : fairytail,
      title : "Fairy Tail Remix" ,
      artists : "Quang Nhật"
   },
   {
    src : tinhve,
    title : "Tinh Vệ Remix" ,
    artists : "Hứa Lam Tâm"
   },
   {
    src : noinaycoanh,
    title : "Nơi Này Có Anh" ,
    artists : "Sơn Tùng"
 },
 {
  src : vianhdaucobiet,
  title : "Vì Anh Đâu Có Biết" ,
  artists : "Madihu, Vũ"
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
    src : phaohoa,
    title : "Pháo Hoa" ,
    artists : "Phí Phương Anh x RIN9 x MiiNa"
   },
  {
   src : baotienmotmobinhyen,
   title : "Bao Tiền Một Mớ Bình Yên" ,
   artists : "14 Casper, Bon Nghiêm"
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
   {
    src : awakening,
    title : "Awakening" ,
    artists : "Defqwop"
   },
   {
    src : blank,
    title : "Blank" ,
    artists : "Disfigure"
   },
   {
    src : candyland,
    title : "Candyland" ,
    artists : "Tobu"
   },
   {
    src : closetothesun,
    title : "Close To The Sun" ,
    artists : "TheFatRat, Anjulie"
   },
   {
    src : escape,
    title : "Escapse" ,
    artists : "K-391"
   },
   {
    src : holo,
    title : "Holo" ,
    artists : "Ampyx"
   },
   {
    src : ipromise,
    title : "I Promise" ,
    artists : "Damon Empero"
   },
   {
    src : flyaway,
    title : "Flyaway" ,
    artists : "TheFatRat, Anjulie"
   },
   {
    src : jackpot,
    title : "Jackpot" ,
    artists : "TheFatRat"
   },
   {
    src : monody,
    title : "Monody" ,
    artists : "TheFatRat, Laura Brehm"
   },
   {
    src : neffex,
    title : "Neffex" ,
    artists : ":>"
   },
   {
    src : nevada,
    title : "Nevada" ,
    artists : "Monstercat"
   },
   {
    src : neverbealone,
    title : "Never Be Alone" ,
    artists : "TheFatRat"
   },
   {
    src : riseup,
    title : "Rise Up" ,
    artists : "TheFatRat"
   },
   {
    src : spektrem,
    title : "Spektrem" ,
    artists : "Shine"
   },
   {
    src : summertime,
    title : "Summer Time" ,
    artists : "K-391"
   },
   {
    src : sunburst,
    title : "Sunburst" ,
    artists : "Tobu, Itro"
   },
   {
    src : thecalling,
    title : "The Calling" ,
    artists : "TheFatRat"
   },
   {
    src : thejourney,
    title : "The Journey" ,
    artists : "Damon Empero"
   },
   {
    src : unity,
    title : "Unity" ,
    artists : "TheFatRat"
   },
   {
    src : whydoi,
    title : "Why Do I" ,
    artists : "Unknown Brain, Bri Tolani, Ava Max"
   },
   {
    src : windfall,
    title : "Wind Fall" ,
    artists : "TheFatRat"
   },

   

  ]
  


   

  return (
   <div className="main">
   <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} setCurrentSongIndex = {setCurrentSongIndex} currentSongIndex={currentSongIndex} songs={songs}/>
      <div className="listPlayer">
        {songs.map( (song,id) => (
              <ListItem title={song.title} artist={song.artists} key={id}  
              active = {id === currentSongIndex ? true : false}
              onClick={() => {
                setCurrentSongIndex(id)

                setTimeout( () => {
                setIsPlaying(false)
                },10)

                setTimeout( () => {
                setIsPlaying(true)
                },100)
                }}
              />
        ))}
      </div>
      
    </div>
  );
}

export default App;
