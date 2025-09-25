import React from 'react'
import Hero from './Hero'
import NewRelease from './NewRealese'
import Page from '../../Components/Page'
import VideoGallery from './VideoGallery'
import Marquee from '../../Components/Marquee'

const Home = () => {
  return (
    <div>
        <Hero />
        <NewRelease />
        <Marquee />
        <VideoGallery />
        <Page />
        
    </div>
  )
}

export default Home
