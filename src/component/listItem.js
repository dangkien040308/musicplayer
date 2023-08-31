import './main.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHeart} from "@fortawesome/free-regular-svg-icons"
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons"
import { memo } from 'react'


function ListItem ({title , artist ,active}) {
    return (
        <div className={active ? 'list_item  active' : 'list_item'} >
            <div className='list_content'>
              <div className='list_title'>{title}</div>
              <div className='list_artist'>{artist}</div>
            </div>
            <div className='list_icon'>
               <FontAwesomeIcon icon={ active ? solidHeart : faHeart}/>
            </div>
        </div>
    );
};

export default memo(ListItem);