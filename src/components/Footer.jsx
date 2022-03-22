import React from 'react'
import github from './github.png'
import linkdin from './linkedin.png'
import twitter from './twitter.png'

const Footer = () => {
    return (
        <div className='footer'>

            <div className='icons'>
                <img src={github} />
            </div>            

            <div className='icons'>
                <img src={linkdin} />
            </div>

            <div className='icons'>
                <img src={twitter} />
            </div>

        </div>
    )
}

export default Footer