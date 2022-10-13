import React, { useState, useEffect } from "react";
import { Songs } from './Songs'
import { FaHeadphones, FaRegClock } from 'react-icons/fa'
import { FaHeart,  FaRegHeart } from "react-icons/fa";
import MusicPlayer from './MusicPlayer'

const AudioList = () => {

    const [songs, setSongs] = useState(Songs);
    const [song, setSong] = useState(Songs[0].song);
    const [img, setImgage] = useState(Songs[0].imgSrc);

    useEffect(() => {
        const songs = document.querySelectorAll(".songs");

        function changeMenuActive() {
            songs.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }

        songs.forEach((n) => n.addEventListener("click", changeMenuActive));
    }, []);


    const changeFavourite = (id) => {
        Songs.forEach(song => {
            if(song.id === id) {
                song.favourite = !song.favourite;
            }
        });

        setSongs([...Songs])
    }

    const setMainSong = (songSrc, imgSrc) => {
        setSong(songSrc);
        setImgage(imgSrc);
    }
    
  return (
    <div className='audioList'>
        <h2 className='title'>Minha lista <span>{`${Songs.length} músicas`}</span></h2>
        <div className='songsContainer'>
            {
                Songs && Songs.map((song, index) => (

                <div className="songs" key={song?.id} onClick={() => setMainSong(song?.song, song?.imgSrc)}>
                    <div className="count">
                        <p>{`#${index + 1}`}</p>
                    </div>
                    <div className='song'>
                        <div className="imgBox">
                            <img src={song?.imgSrc} alt="" />
                        </div>
                        <div className="favourite" onClick={() => changeFavourite(song?.id)}>
                            {song?.favourite ? (<i><FaHeart /></i>) : (<i><FaRegHeart /></i>)}
                        </div>
                        <div className='section'>
                            <p className='songName'>{song?.artist} <span className='spanArtist'>{song?.songName}</span></p>
                            <div className='hits'>
                                <p><i><FaHeadphones /></i>5.495.02</p>
                                <p className='duration'><i><FaRegClock /></i>4.25</p>
                            </div>
                        </div>
                    </div>
                </div>

                ))
            }
            
        </div>

        <MusicPlayer song={song} imgSrc={img} />
    </div>
  )
}

export default AudioList
