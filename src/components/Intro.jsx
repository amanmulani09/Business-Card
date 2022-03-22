import React from 'react'
import pic from '../components/pic.jpg'

const Intro = () => {
  return (
    <div className='intro'>
        <div className="image-container">
            <img src={pic} alt="userpic" />
            </div>
            <h3>Aman Mulani</h3>
            <h4>FrontEnd Developer</h4>
            <button>Email</button>
    </div>
  )
}

export default Intro