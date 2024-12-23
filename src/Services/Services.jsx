import React from 'react'
import './Services.css'

export default function Services() {
  return (
    <div className='Services'>
        <div className="services">
            <div className="services-header">
            <div className="services-left">
                    <p className="animate__animated  animate__fadeInDown">WHAT WE DO</p>
                    <h2>Revolutionize Your Business With Our</h2>
                    <h2 className='services-left-heading'>Cutting-Edge AI Services .</h2>
                </div>
                <div className="services-right">
                    <h1 className='services-right-heading animate__animated animate__heartBeat animate__infinite'>services</h1>
                </div>
            </div>

            <div className="cards d-flex justify-content-center align-center gap-4 p-5 ">
                <div className="card-one text-center">
                <i className="fas fa-shopping-cart "></i>
                <h4 className='card-h4'>Consumer Markets</h4>
                <p>AI revolutionizes consumer markets by analyzing vast amounts of data to predict trends, personalize customer experiences, optimize inventory management, and improve marketing strategies .</p>
                <button className='read-more'>Read More</button>
                </div>
                <div className="card-one text-center">
                <i className="fas fa-code"></i>
                
                <h4 className='card-h4'>Technology Consulting</h4>
                <p>technology consulting empowers businesses to leverage data-driven insights, streamline operations, enhance decision-making , innovate solutions, driving efficiency and competitive advantage in a rapidly evolving market .</p>
                <button className='read-more'>Read More</button>
                </div>
                <div className="card-one text-center">
                <i className="fas fa-business-time"></i>
                <h4 className='card-h4'>Consulting Services </h4>
                <p>AI in consulting services enables firms to provide data-driven insights, improve strategic planning, enhance operational efficiency, and deliver personalized solutions, fostering growth and innovation for clients .</p>
                <button className='read-more'>Read More</button>
                </div>
                <div className="card-one text-center">
                <i className="fas fa-key"></i>
                <h4 className='card-h4'>Privte Consulting</h4>
                <p>Private consulting provides tailored expertise in various fields, including finance, strategy, and operations, helping clients navigate challenges and achieve their unique goals through personalized strategies and targeted solutions for success .</p>
                <button className='read-more'>Read More</button>
                </div>
            </div>

        </div>
    </div>
  )
}
