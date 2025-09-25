import React from 'react'
import Slides from '../../Page/Home/slides' 
import Marquee from '../../Components/Marquee'
import MoviesCards from './MoviesCards'

function Movies() {
  return (
    <div>
        <Slides />
        <Marquee /> 
        <MoviesCards />
    </div>
  )
}

export default Movies
