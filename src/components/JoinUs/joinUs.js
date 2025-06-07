import React from 'react'
import './joinUs.css';
import Join from "../../assets/join.jpg"; 

import Linkedin from "../../assets/linkedin3.png";
import Instagram from "../../assets/insta4.png";
import Github from "../../assets/github3.png";
import Facebook from "../../assets/facebook3.png";
import Mail from "../../assets/mail.png";

export default function joinUs() {
  return (
    <div className='joinus-container'>
        <div className='joinus-title'>
            <span className='joinus-title1'>JOIN OUR TEAM</span>
            <div className='joinus-subcontent'>
            <span className='joinus-subcontent1'>At UBC Subbots, we embrace students from all backgrounds and provide hands-on learning in a supportive, beginner-friendly environment.</span>
            <span className='joinus-subcontent1'>Our current application cycle has now closed. Thank you to everyone who applied!</span>
            <span className='joinus-subcontent2'>Stay tuned to our social media channels for updates on future opportunities!!</span>
            </div>
        </div>
        <div className='joinus-socials'>
          <a href= "https://www.linkedin.com/company/ubc-subbots/">
                      <img src={Linkedin} alt="linkedin" className="joinus-linkedin"/>
                  </a>
          
                  <a href= "https://www.instagram.com/ubcsubbots/">
                    <img src={Instagram} alt="instagram" className="joinus-instagram"/>
                  </a>
           
                  <a href='https://www.facebook.com/ubc.subbots/'>
                    <img src={Facebook} alt="facebook" className="joinus-facebook"/>
                  </a>
          
                  <a href='https://github.com/ubc-subbots'>
                    <img src={Github} alt="github" className="joinus-github"/>
                  </a>

                  <a href='https://github.com/ubc-subbots'>
                    <img src={Mail} alt="mail" className="joinus-mail"/>
                  </a>
          
        </div>
    </div>
  )
}
