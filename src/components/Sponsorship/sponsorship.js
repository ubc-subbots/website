import React from 'react';
import './sponsorship.css';
import Scroll from './scroll.js';

export default function sponsorship() {
  return (
    <div className='sponsor-container'>
      <div className='sponsor-titles'>
        <span className='sponsor-title1'>SEE WHO MAKES US POSSIBLE</span>
        <span className='sponsor-title2'>
          To make our designs a reality, Subbots relies on the support of our
          many sponsors. Through in-kind and monetary contributions our members
          are able to develop the skills necessary to become engineering
          professionals. They also gain experience working with our sponsor’s
          wonderful products, allowing them to more effectively design with
          similar components in the future. We are always open to new partners,
          and if you would like to sponsor our team please reach out to us for
          our sponsorship package.
        </span>
        <div className='buttons'>
          <a
            href='https://donate.give.ubc.ca/page/80953/donate/1?transaction.dirgift=UBC%20Subbots%20Design%20team%20G2561'
            target='_blank'
            rel='noopener noreferrer'
            className='sponsor-button-link'
          >
            <button className='sponsor-button'>Sponsor Now</button>
          </a>
        </div>
      </div>
      <div className='scroll-main'>
        <Scroll />
      </div>
    </div>
  );
}
