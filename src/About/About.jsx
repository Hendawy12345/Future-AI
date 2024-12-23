import React from 'react';
import '../About/About.css';
import Img from '../Imgs/imge5.jpeg';
import ImgTwo from '../Imgs/img6.jpeg';

export default function About() {
  return (
    <div className="about-parent">
      <div className="heading-about px-5 text-center">
        <h1>STRENGTHENING THE FUTURE WITH</h1>
        <h2 className="neom">Artificial Intelligence</h2>
      </div>
      <div className="about-child d-flex flex-column flex-lg-row align-items-center">
        
        <div className="about-left p-4">
          <div className="card mb-4">
            <div className="img">
              <div className="text">
                <p className="pra-text">
                  <span>OPTIMIZING AI:</span> Designing the future with Artificial Intelligence.
                </p>
              </div>
            </div>
          </div>
          <div className="card mt-5 p-3 bg-dark">
            <div className="header-card px-3 d-flex justify-content-between align-items-center bg-dark text-white">
              <div className="left-card">
                <img src={Img} alt="Partnership Icon" />
              </div>
              <div className="right-card text-center">
                <h2>150K+</h2>
                <h5>Partners</h5>
              </div>
            </div>
            <hr className="custom-hr" />
            <div className="card-text">
              <p className="text-white fs-5 p-3">
                Become a part of our innovative community and collaborate to build the future.
              </p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </div>
        
        <div className="about-right p-3">
          <img src={ImgTwo} alt="AI Representation" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
