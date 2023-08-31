import { useEffect ,useState ,useRef} from "react"
import PlayerControl from "./playerControl"
import PlayerDetail from "./playerDetail"


function Player ({setCurrentSongIndex,currentSongIndex,songs}) {
    const audioElement = useRef()
    const [isPlaying,setIsPlaying] = useState(false)
    const handleEnded = () => {
        SkipSong(true)
        setTimeout( () => {
            setIsPlaying(false)
        },10)
        setTimeout( () => {
            setIsPlaying(true)
        },100)
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
                let index = currentSongIndex
                index++ 
                
                if (index > songs.length - 1) {
                    index = 0 
                }
                 
                return index
             })
        } else if (bool === false) {
            setCurrentSongIndex(() => {
                let index = currentSongIndex
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
            <audio src={songs[currentSongIndex].src} ref={audioElement} onEnded={handleEnded}> </audio>
            <PlayerDetail song={songs[currentSongIndex]} />
            <PlayerControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}/>
        </div>
    )
}

export default Player
