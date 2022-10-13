import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsMusicPlayerFill } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'

import MusicList from './MusicList'

const PlayList = () => {
  return (
    <div className='playList'>
        <div className='name'>
            <p>PlayList</p>
            <i><FaPlus /></i>
        </div>
        <div className='playListScroll'>
            {
                MusicList && MusicList.map( (list) => (

                 <div className='playListContent' key={list.id}>
                   <i className='list'><BsMusicPlayerFill /></i>
                   <p>{list.name}</p>
                   <i className='trash'><BsTrash /></i>
                 </div>

                ))
            }
        </div>
    </div>
  )
}

export default PlayList
