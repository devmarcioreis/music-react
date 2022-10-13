import React from 'react'
import Track from '../../images/track.png'

import { BsFillVolumeUpFill } from 'react-icons/bs'
import { BsMusicNoteList  } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa'

const TrackList = () => {
  return (
    <div className='trackList'>
        <div className='topSection'>
            <img src={Track} alt='Imagem'/>
            <p>
                Sandman <span>Metalica</span>
            </p>
        </div>
        <div className='bottomSection'>
            <i><BsFillVolumeUpFill /></i>
            <input className='input' type='range' />
            <i><BsMusicNoteList  /></i>
            <i><FaDesktop /></i>
        </div>
    </div>
  )
}

export default TrackList
