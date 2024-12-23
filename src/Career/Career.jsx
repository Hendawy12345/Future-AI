import React from 'react'
import './Career.css'
import Card from 'react-bootstrap/Card';
import Img from '../Imgs/img4.jpeg'

export default function Career() {
  return (
    <div className='Career'>
       <div className="container career ">
        <div className="career-left" >
            <div className="career-left-top ">
                <h2>power of . <span>ai</span> </h2>
            </div>
            <div className="career-left-center ">
                <h2>future - <span>Artificial Intelligence</span></h2>
            </div>
            <div className="career-left-bottom bg-dark p-3 rounded-2">
                <h3>future power ai</h3>
                <p> <span>AI power</span> systems will revolutionize industries by optimizing processes, enhancing decision-making, and enabling personalized experiences, driving unprecedented growth and efficiency.</p>
            <button class="discover rounded-2">Discover</button>
            </div>
        </div>
        <div className="career-right ">
        <Card className='Card bg-dark text-white' >
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title className='card-title'>
            <h3>high tech.</h3>
            <h4>higher intelligence</h4>
        </Card.Title>
        <Card.Text>
        Nova-X: Unleash AI's power to revolutionize your business, simplify complex tasks, and achieve extraordinary results.
        </Card.Text>
        <button class="discover rounded-3"> MORE </button>
      </Card.Body>
        </Card>
        </div>
       </div>
    </div>
  )
}
