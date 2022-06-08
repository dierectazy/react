import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to={{pathname:'/about', hash:'Hello'}}>
        <FaQuestion size={30}></FaQuestion>
        </Link>
     

    </div>
  )
}

export default AboutIconLink
