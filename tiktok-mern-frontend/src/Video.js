import React, { useRef, useState } from 'react'
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        // if video is playing 
        // stop it...

        // otherwise play it...
    }

    return (
        <div className='video'>
            <video
            onClick={handleVideoPress}
                loop
                className='video__player'
                ref={videoRef}
                src='https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4' />

            <VideoFooter />
            <VideoSidebar />
        </div>
    )
}

export default Video