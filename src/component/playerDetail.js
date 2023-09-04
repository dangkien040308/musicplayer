import React from 'react';
import { memo } from 'react';
import './responsive.css'

const PlayerDetail = ({song}) => {
    return (
        <div className="title_song">
            <div className="song_name">{song.title}</div>
            <div className="song_artists">{song.artists}</div>
        </div>
    );
};

export default memo(PlayerDetail)