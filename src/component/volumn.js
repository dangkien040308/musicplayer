import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeDown , faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const Volumn = ({setVolumn}) => {
    return (
        <div className="volumn">
       {/* react volumn component */}
       <FontAwesomeIcon icon={faVolumeDown} className='icon' />
       <input type="range" min="0" max="100"  className="slider" onChange={e => setVolumn(e.target.value)} />
       <FontAwesomeIcon icon={faVolumeUp} className='icon' />
        </div>
    );
};

export default Volumn;