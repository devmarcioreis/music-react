import React from 'react'
import './main.css'

import Banner from './Banner'
import AudioList from './AudioList'

import { FaUser } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='mainContainer'>
        <Banner />
        <div className='menuList'>
          <ul>
            <li><a href='#'>Popular</a></li>
            <li><a href='#'>Nacional</a></li>
            <li><a href='#'>Internacional</a></li>
            <li><a href='#'>Latino</a></li>
            <li><a href='#'>Clássica</a></li>
          </ul>
          <p><i><FaUser /></i> +20 Milhões de usários</p>
        </div>
        <AudioList />
    </div>
  )
}

export default Main
