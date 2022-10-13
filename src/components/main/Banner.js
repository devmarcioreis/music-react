import React from 'react'

import Artist from '../../images/banner.jpg'
import Check from '../../images/check.png'

import { FaEllipsisH, FaHeadphones, FaCheck, FaPlay } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='banner'>
        <img src={Artist} alt="Banner" className='bannerImage'/>
        <div className='content'>
            <div className='breadCrump'>
                <p>Home <span>/Música mais tocada</span></p>
                <i><FaEllipsisH /></i>
            </div>
            <div className='artist'>
                <div className='leftSection'>
                    <div className='name'>
                        <h2>Erick Clapton</h2>
                        <img src={Check} alt='Check' />
                    </div>
                    <p><i><FaHeadphones /></i> 9.987.100 <span>Ouvida este mês</span></p>
                </div>
                <div className='rightSection'>
                    <a href='#' className='play'><i><FaPlay /></i>Play</a>
                    <a href='#'><i><FaCheck /></i>Seguindo</a>
                </div>
            </div>
        </div>
        <div className='bottom'></div>
    </div>
  )
}

export default Banner
