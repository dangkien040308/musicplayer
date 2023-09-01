import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faForward ,faBackward ,faPlay , faPause } from "@fortawesome/free-solid-svg-icons"
import "./main.css"
import { useState } from "react"


function PlayerControl({setIsPlaying,isPlaying,SkipSong}) {
    
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const [delay , setDelay] = useState(false)

    const handleClick = async(bool) => {
        while(delay) await sleep(100)
        setDelay(true)
        SkipSong(bool)
        setIsPlaying(false)
        setIsPlaying(true)
        setTimeout( () => {
            setDelay(false)
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
        </div>
    )
}

export default PlayerControl