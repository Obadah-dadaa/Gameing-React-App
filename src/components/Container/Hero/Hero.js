import { PrimaryButton, PrimaryButtons } from '../..'
import '../Hero/Hero.css'

function Hero() {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='herp-subtitle'>Welcome To Cyborg</h6>
            <h4 className='hero-title'><em>BROWSE</em> OUR POPULAR GAMES HERE</h4>
              <PrimaryButtons>Browse Here</PrimaryButtons>
        </div>
      </div>
  )
}

export default Hero