import React from 'react';
import './joinUs.css';
import Linkedin from '../../assets/linkedin3.png';
import Instagram from '../../assets/insta4.png';
import Github from '../../assets/github3.png';
import Facebook from '../../assets/facebook3.png';
import Mail from '../../assets/mail.png';

export default function joinUs() {
  return (
    <div className='joinus-container'>
      <div className='joinus-title'>
        <span className='joinus-title1'>JOIN OUR TEAM</span>
        <div className='joinus-subcontent'>
          <span className='joinus-subcontent1'>
            At UBC Subbots, we embrace students from all backgrounds and provide
            hands-on learning in a supportive, beginner-friendly environment.
          </span>
          <span className='joinus-subcontent1'>
            Our current application for 2025/26 is open! Please fill out the
            form below to apply.
          </span>
          <span className='joinus-subcontent1'>
            <strong>Application Deadline: September 9th at 11:59 PM</strong>
          </span>

          {/* Application Form Button */}
          <div className='joinus-form-section'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSdDVtnGzB9UYMgdWIYMJseUc-fO0aFcaSABoe9QLt9R51JNFg/viewform'
              target='_blank'
              rel='noopener noreferrer'
              className='joinus-form-button'
            >
              Apply Now - 2025/26 Recruitment
            </a>
          </div>

          <span className='joinus-subcontent2'>
            Stay tuned to our social media channels for updates on future
            opportunities!!
          </span>
        </div>
      </div>
      <div className='joinus-socials'>
        <a href='https://www.linkedin.com/company/ubc-subbots/'>
          <img src={Linkedin} alt='linkedin' className='joinus-linkedin' />
        </a>

        <a href='https://www.instagram.com/ubcsubbots/'>
          <img src={Instagram} alt='instagram' className='joinus-instagram' />
        </a>

        <a href='https://www.facebook.com/ubc.subbots/'>
          <img src={Facebook} alt='facebook' className='joinus-facebook' />
        </a>

        <a href='https://github.com/ubc-subbots'>
          <img src={Github} alt='github' className='joinus-github' />
        </a>

        <a
          href='mailto:ubc.subbots@gmail.com?subject=Inquiry&body=Hello%20Subbots%20Team,'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Mail} alt='mail' className='joinus-mail' />
        </a>
      </div>
    </div>
  );
}
