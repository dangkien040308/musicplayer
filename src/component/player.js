import { useEffect ,useState ,useRef} from "react"
import PlayerControl from "./playerControl"
import PlayerDetail from "./playerDetail"


function Player ({setCurrentSongIndex,curentSongIndex,songs}) {
    const audioElement = useRef()
    const [isPlaying,setIsPlaying] = useState(false)
    const handleEnded = () => {
        SkipSong(true)
        setIsPlaying(false)
        setTimeout( () => {
            setIsPlaying(true)
        },1000)
    }
  useEffect( () => {
      if (isPlaying) {
          audioElement.current.play()
       } else {
           audioElement.current.pause()
       }
    },[isPlaying])


    const SkipSong = (bool) => {
        if (bool === true) {
             setCurrentSongIndex(() => {
                let index = curentSongIndex
                index++ 
                
                if (index > songs.length - 1) {
                    index = 0 
                }
                 
                return index
             })
        } else if (bool === false) {
            setCurrentSongIndex(() => {
                let index = curentSongIndex
                index--

                if (index < 0) {
                    index = songs.length - 1 
                }
                return index
             })
        }
    }

    return (
        <div className="music_player">
            <audio src={songs[curentSongIndex].src} ref={audioElement} onEnded={handleEnded}> </audio>
            <PlayerDetail song={songs[curentSongIndex]} />
            <PlayerControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}/>
        </div>
    )
}

export default Player
