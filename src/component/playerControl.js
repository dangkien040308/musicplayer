import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faForward ,faBackward ,faPlay , faPause } from "@fortawesome/free-solid-svg-icons"
import "./main.css"


function PlayerControl({setIsPlaying,isPlaying,SkipSong,ele}) {
    
    const handleClick = (bool) => {
        SkipSong(bool)
        setIsPlaying(false)
        setTimeout( () => {
            setIsPlaying(true)
        },1000)
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
        </div>
    )
}

export default PlayerControl