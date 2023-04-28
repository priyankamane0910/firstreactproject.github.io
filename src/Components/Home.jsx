import React from 'react'
import RohitImage from '../assets/7th.webp'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <div className='home' id='homepage'>
            <main>
                <h1 style={{marginRight :"25px"}}>IPL Championship</h1>
                <p style={{marginRight :"25px"}}>Let the battel begin</p>
            </main>
        </div>

        <div className='home2'>
           <img  src={RohitImage } style={{marginTop:"75px"}} alt="Graphics" />
        <div> 
            <h2>Mumbai Indians </h2><br/>
             <p>Mumbai Indians are the most successful team in 
              IPL,having won the title a record five times. 
              Rohit Sharma is the Captain of MI family.</p>
        </div>
        </div>

        <div className='home3' id='about'>
          <div>
            <h2>Who we are ?</h2>
            
            {/* <pre>
              1) Mumbai Indians               :       Rohit Sharma <br/>
              2) Chennai Super Kings          :       MS Dhoni <br/>
              3) Royal Challengers Bangalore   :       Virat Kohali <br/>
              4) Kolkata Knight Riders         :       Shreyas Iyer <br/>
              5) Rajasthan Royals             :       Sanju Samson <br/>
              6) Punjab Kings                :       Mayank Agarwal <br/>
              7) Gujarat Titans               :       Hardik Pandya <br/>
              8) Delhi Daredevils             :       Rishabh Pant<br/>
              9) Lucknow Super Giant         :       KL Rahul<br/>
            </pre> */}

            <p>
            The Indian Premier League (IPL) is a men's T20 franchise cricket league in India. 
            It is annually contested by ten teams based in seven cities and three states. 
            The league was founded by the Board of Control for Cricket in India (BCCI) in 2007.
            Brijesh Patel is the incumbent chairman of IPL. It is usually held annually in 
            summer across India between March to May and has an exclusive window in the ICC 
            Future Tours Programme.There are 10 teams part of IPL. They are Delhi Capitals,
             Punjab Kings, Rajasthan Royals, Lucknow Super Giants, Kolkata Knight Riders, 
             Gujarat Titans, Mumbai Indians, Sunrisers Hyderabad, Royal Challengers Bangalore, 
             and Chennai Super Kings.
            </p>

          </div>
        </div>

        <div className='home4' id='brands'>
          
          <div>
              <h1>Brands</h1>
              <article>
                <div style={{animationDelay :'0.3s'}}>
                  <AiFillGoogleCircle/>
                  <p>Goggle</p>
                </div>

                <div style={{animationDelay:'0.5s'}}>
                  <AiFillAmazonCircle/>
                  <p>Amazon</p>
                </div>

                <div style={{'aniationDelay':'0.7s'}}>
                  <AiFillYoutube/>
                  <p>YouTube</p>
                </div>

                <div style={{'animationDelay':'0.9s'}}>
                  <AiFillInstagram/>
                  <p>Instagram</p>
                </div>
              </article>
            </div>
        </div>
    </>
  )
}

export default Home