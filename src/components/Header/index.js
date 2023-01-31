import React from 'react'
import "./Header.css" 
import head from '../../components/Header/head.svg'

function Header() {
  return (
    <>
    <img className='head' src={head} alt='nd'></img>
    <div className='Heading'>
        Triadic Consultancy 
    </div>
    <div className='Features'>
        Features
        <div className='ft-des'>
   A Full Stack Development Team which creates smooth and scalable applications
        </div>
    </div>
    </>
  )
}

export default Header