import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";
function VideoFooter() {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@Bobbbb</h3>
                <p>this is some text</p>
                <div className='videoFooter__ticker'>
                    <MusicNoteIcon
                        className='videoFooter__icon'
                    />
                    <Ticker mode='smooth'>
                        {({ index }) => (
                            <>
                                <p>I am a song</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className='videoFooter__record'
                src='https://static.thenounproject.com/png/934821-200.png'
                alt=''
            />
        </div>
    )
}

export default VideoFooter