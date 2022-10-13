import React, { useState, useRef, useEffect } from 'react'
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepBackward, FaStepForward } from 'react-icons/fa'
 
const MusicPlayer = ({ song, imgSrc}) => {

  
  const [isPlaying, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime()
  }

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty('--player-played', `${(progressBar.current.value / duration) *100}%`);

    setCurrentTime(progressBar.current.value);
  }

  return (
    <div className='musicPlayer'>
      <div className='songImage'>
        <img src={imgSrc} alt=''/>
      </div>
      <div className='songAttributes'>
        <audio src={song} preload='metadata' ref={audioPlayer}/>
        <div className='top'>
          <div className='left'>
          </div>
          <div className='meddle'>
            <div className='back'>
              <i><FaStepBackward /></i>
              <i><FaBackward /></i>
            </div>
            <div className='playPause' onClick={changePlayPause}>
            {isPlaying ? <i><FaPause /></i> : <i><FaPlay /></i>}
            </div>
            <div className='forward'>
            <i><FaForward /></i>
            <i><FaStepForward /></i>
            </div>
          </div>
          <div className='right'>
          <i><FaShareAlt /></i>
          </div>
        </div>
        <div className='bottom'>
        <div className="currentTime">{calculateTime(currentTime)}</div>
        <input type="range" className="progressBar" ref={progressBar} onChange={changeProgress} />
        <div className="duration">{(duration && !isNaN(duration) && calculateTime(duration)) ? calculateTime(duration) : "00:00"}</div>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
