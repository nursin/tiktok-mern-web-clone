import React, { useRef, useState } from 'react'
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
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
                src={url} />

            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar
                shares={shares}
                likes={likes}
                messages={messages}
            />
        </div>
    )
}

export default Video