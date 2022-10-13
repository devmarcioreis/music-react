import React from 'react'
import './left.css'

import { SiYoutubemusic } from 'react-icons/si'
import { BsSearch } from 'react-icons/bs'

import Menu from '../menu/Menu'
import MenuList from '../menu/MenuList'

import MusicList from '../playList/PlayList'
import TrackList from '../tracks/TrackList'


const Left = () => {
  return (
    <div className='leftMenu'>
        <div className='logo'>
          <i><SiYoutubemusic /></i>
          <h2>Music</h2>
        </div>
        <div className='search'>
          <input type='text' placeholder='procurar músicas...' />
          <i className='searchIcon'><BsSearch /></i>
        </div>
        
        <Menu title={'Menu'} menuObject={MenuList}/>

        <MusicList />

        <TrackList />
    </div>
  )
}

export default Left
