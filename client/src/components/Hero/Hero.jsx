import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'
import SearchBar from '../SearchBar/SearchBar'
const Hero = () => {
  return (
       <section className='discover-wrapper'>
            <div className='paddings innerWidth flexCenter disc-container'>
                <div className='flexColStart disc-left'>
                    <div className='disc-title'>
                        <div className='blue-circle'/>
                        <div className='orange-circle'/>
                        <h1>Explore Optimal <br/>Real Estate Options</h1>
                    </div>

                    <div className='flexColStart disc-des'>
                        <span className='secondaryText'>Discover a diverse range of properties tailored to your needs effortlessly</span>
                        <span className='secondaryText'>Bid farewell to the challenges of securing your perfect home</span>
                    </div>

                    <SearchBar/>
                 

                    <div className='flexCenter stats'>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp start={1500} end={2100} duration={5}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Properties</span>
                        </div>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp start={400} end={500} duration={5}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customer</span>
                        </div>
                        <div className='flexColCenter stat'>
                            <span>
                                <CountUp start={5} end={10} duration={5}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Awards Won</span>
                        </div>
                    </div>
                </div>


                <div className='flexCenter disc-right'>
                    <div className='image-container'>
                        <img src='/hero-image.png'/>
                    </div>
                </div>
            </div>
       </section> 
  )
}

export default Hero;