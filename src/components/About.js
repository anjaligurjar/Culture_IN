import React from 'react'
import temp from "../Images/Bandha.jpg"
import img from "../Images/waterfall.jpg"
import ind from "../Images/indore.jpg"
export default function About () {
  return (
<div>
  <div className='banner-container'>
<div class="about-section">
  <h1>About Us </h1>
  <p> CUlture know  With Us</p>
  <p>Madhya Pradesh is the heart of India. Originally known
     as Malwa, the place has nurtured some epic rulers and 
     warriors as well, like Emperor Ashoka, Chandragupta, 
     Vikramaditya, Harsha Vardhan, Raja Bohoj and many others.
      A long, revealing history forged by these great men is preserved in book and
       ink. The place has a subtropical climate, much like North India. The state has 
       intact connectivity with railway and airways; tourist would not find travel distress of any sorts. </p>
</div>
<div></div>
<h2 >Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src={temp} alt="bandhavgarh"  />
      <div class="container1">
        <h2>Bandhavgarh</h2>
        <p className="title">Culture our</p>
        <p>PLease visit here </p>
      
        <p><button className="button">View All</button></p>
      </div>
    </div>
  </div>
<div></div>
  <div className="column">
    <div className="card">
      <img src={ind} alt="Places" />
      <div className="container1">
        <h2>PLaces</h2>
        <p className="title"> Indore</p>
        
       <div></div>
        <p><button className="button">View All</button></p>
      </div>
    </div>
  </div>
  <label for="Waterfall"></label>
  <div className="column">
    <div className="card">
      <img src={img} alt="waterfall"></img> 
      <div class="container1">
        <h2>Waterfall</h2>
        <p className="title">Nature</p>
      
      
        <p><button className="button">View All</button></p>
      </div>
    </div>
  </div>
</div>

</div>


</div>


  )



}