import React from 'react'
import './Home.css'
import Img from '../Imgs/img1.png'

export default function home() {
  return (
    <div className=' parent'>
        <div className="container chiled">

            <div className="home_left">
                <h3 className='animate__animated animate__backInDown'> AI - POWERED</h3>
                <h1 className='animate__animated animate__delay-1s animate__backInLeft'>FUTURE</h1>
                <p>
                AI and robotics are transforming home life by enhancing convenience and efficiency. Smart assistants and robotic vacuums adapt to your needs, making daily tasks easier. This synergy between technology and human life creates a harmonious living environment, enriching our routines and elevating our overall experience at home.
                </p>
                <div className="btn">
                <button className="start animate__animated  animate__fadeInUp" alt="Let's Start">
                    <i>L</i>
                    <i>e</i> 
                    <i>t</i>
                    <i>'</i>
                    <i>s</i>
                    <i>&nbsp;</i>
                    <i>S</i>
                    <i>t</i>
                    <i>a</i>
                    <i>r</i>
                    <i>t</i>
                    </button>
                </div>
            </div>

            <div className="home_right">
                <img src={Img} alt="" className='animate__animated animate__fadeInRight' />
                <p className='animate__animated animate__delay-1s animate__fadeInRight'>
                Artificial Intelligence
                </p>
            </div>

        </div>
    </div>
  )
}
