import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faForward ,faBackward ,faPlay , faPause } from "@fortawesome/free-solid-svg-icons"
import "./main.css"
import Volumn from "./volumn";
import './responsive.css'


function PlayerControl({setIsPlaying,isPlaying,SkipSong,setVolumn}) {    

     const handleClick = (bool) => {
        SkipSong(bool)
        setIsPlaying(false)
        setTimeout ( ()=> {
            setIsPlaying(true)
        },100)
    }

    return (
        <div className="music_playercontrol">
            <button className="prev_song_btn control_btn" onClick={() => handleClick(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play_song_btn control_btn" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ?  <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}
            </button>
            <button className="next_song_btn control_btn" onClick={() => handleClick(true)}>
                <FontAwesomeIcon icon={faForward}/>
            </button>
            <Volumn setVolumn={setVolumn} />
        </div>
    )
}

export default PlayerControl