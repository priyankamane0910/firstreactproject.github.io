import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import MI from '../assets/MI.jpg'
import CSK from '../assets/CSK.webp'
import DC from '../assets/DC.jpg'
import GT from '../assets/GT.png'
import KKR from '../assets/KKR.jpg'
import LSG from '../assets/LSG.jpeg'
import RCB from '../assets/RCB.webp'
import SRH from '../assets/SRH.png'


const Teams = () => {
  return (
    <div>
    {/* <div><div style={{backgroundColor:'rgb(219, 173, 188)'}}> */}
 
      <Carousel infiniteLoop autoPlay 
      showStatus={false}
      showThumbs={false}
      interval={1700}
      >

        <div style={{}}>
            <img src={MI} alt="Item1" style={{height:'70%', width:'65%'}}/>
            <p style={{fontSize:"50px",margin:'10px'}}>Mumbai Indians</p>
        </div>
        <div>
            <img src={CSK} alt="Item2" style={{height:'460px', width:'60%'}}/>
            <p style={{fontSize:"50px"}}>Chennai Super Kings</p>
        </div>
        <div>
            <img src={DC} alt="Item3" style={{height:'65%', width:'65%'}}/>
            <p style={{fontSize:"50px"}}>Delhi Capitals</p>
        </div>
        <div>
            <img src={GT} alt="Item4" style={{height:'460px', width:'60%'}}/>
            <p style={{fontSize:"50px"}}>Gujarat Titans</p>
        </div>
        <div>
            <img src={KKR} alt="Item5" style={{height:'70%', width:'65%'}}/>
            <p style={{fontSize:"50px"}}> Kolkata Knight Riders</p>
        </div>
        <div>
            <img src={LSG} alt="Item6" style={{height:'70%', width:'70%'}}/>
            <p style={{fontSize:"50px"}}>Lucknow Super Giants</p>
        </div>
        <div>
            <img src={RCB} alt="Item7" style={{height:'65%', width:'60%'}}/>
            <p style={{fontSize:"50px"}}>Royal challengers bangalore</p>
        </div>
        <div>
            <img src={SRH} alt="Item8" style={{height:'67%', width:'60%'}}/>
            <p style={{fontSize:"50px"}}>Sunrisers hyderabad</p>
        </div>
      </Carousel>

    </div>
  )
}

export default Teams