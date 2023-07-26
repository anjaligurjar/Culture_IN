import React from 'react'
import {Card} from "react-bootstrap"
import asd from "../Images/temple12.jpg"
export default function Blogs() {

  return (
    <div>
<Card>
  <Card.Img
  varient="top"
  src={asd} />

  <Card.Body>
    <Card.Title> Incredible _MP_Temples_Here   </Card.Title>
      <Card.Text>
      Madhya Pradesh’s famous temples and connect to their spiritual side.
       They are known for their distinct art and designs. Temples in Madhya Pradesh let you have a religious escape from the hustle and bustle of your everyday life. The holy trip to Madhya Pradesh will leave you enchanted, and you will cherish the memories for the rest of your lives. Every 
      temple has its own story to tell, 
      let us take you to divine land to get to know famous temples in Madhya Pradesh.
      </Card.Text>
  
  </Card.Body>
  <a href="#" className="btn btn-primary">Read More</a>
  </Card>


    </div>
  )
}

