import React from 'react';
import {
  faCode,
  faTools,
  faCarBattery,
  faBriefcase,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './members.css';
import Member from './member';

export const AdminMembers = [
  {
    image: '/images/members/Parth.JPG',
    name: 'Parth Patel',
    role: 'Relations Director',
    linkedin: 'https://www.linkedin.com/in/parth-patel-433703266/',
    mail: 'parthrp15@gmail.com',
  },
];

export const ActuatorMembers = [
  {
    image: '/images/members/Aldiyar_Mukatay.jpeg',
    name: 'Aldiyar Mukatay',
    role: 'Actuators Member',
    linkedin: 'https://www.linkedin.com/in/aldiyar-mukatay/',
  },
  {
    image: '/images/members/Rohin_Dhaliwal.jpeg',
    name: 'Rohin Dhaliwal',
    role: 'Claw System Design',
    linkedin: 'https://www.linkedin.com/in/rohin-dhaliwal-9bb87b220/',
  },
];

export const ElectricalMembers = [
  {
    image: '/images/members/Abhishek.jpeg',
    name: 'Abhishek Raghuwanshi',
    role: 'Electrical Project Lead',
    linkedin: 'https://www.linkedin.com/in/a112r',
  },
  {
    image: '/images/members/Avery_Cheng.jpeg',
    name: 'Avery Cheng',
    role: 'Electrical Team Member',
    linkedin: 'https://www.linkedin.com/in/averybcheng/',
  },
  {
    image: '/images/members/Samarr.jpg',
    name: 'Samarr Parmaar',
    role: 'Electrical Team Member',
    linkedin: 'https://www.linkedin.com/in/averybcheng/',
  },
];

export const SoftwareMembers = [
  {
    image: '/images/members/Fei_Kuan.jpg',
    name: 'Fei Kuan',
    role: 'Software Co-Lead',
    linkedin: 'https://www.linkedin.com/in/feikuan/',
  },
  {
    image: '/images/members/Marius.png',
    name: 'Marius Shepherd',
    role: 'Software Developer',
    linkedin: 'https://www.linkedin.com/in/mariiimako/',
  },
  {
    image: '/images/members/Joel_Hempel.png',
    name: 'Joel Hempel',
    role: 'Autonomous Navigation Engineer',
    linkedin: 'https://www.linkedin.com/in/joelhempel',
  },
  {
    image: '/images/members/Ruhani_Mittal.jpg',
    name: 'Ruhani Mittal',
    role: 'Website Lead',
  },
];

export default function members() {
  return (
    <div className='members-container'>
      <div className='members-title'>
        <img
          src='/images/members/team_photo_2024.jpg'
          alt='group'
          className='group'
        />
        <span className='member-title1'>MEET THE TEAM</span>
        <span className='member-title2'>
          United by curiosity and driven by purpose, our 44+ team members bring
          unique skills and shared passion to every step of the journey!
        </span>

        <div className='members'>
          <div className='admin'>
            {/* Admin + Business */}
            <div className='align1'>
              <span className='admin-title'>ADMIN + BUSINESS</span>
              <FontAwesomeIcon
                icon={faBriefcase}
                style={{
                  fontSize: '3.5rem',
                  color: 'rgb(9, 7, 69)',
                  marginLeft: '0.5rem',
                }}
              />
            </div>
            <div className='align'>
              {AdminMembers.map((member, index) => (
                <Member
                  key={index}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>

          {/* mechanical */}
          <div className='mechanical'>
            <div className='align1'>
              <span className='mechanical-title'>ACTUATOR</span>
              <FontAwesomeIcon
                icon={faTools}
                style={{
                  fontSize: '3rem',
                  color: 'rgb(9, 7, 69)',
                  marginLeft: '0.5rem',
                }}
              />
            </div>
            <div className='align'>
              {ActuatorMembers.map((member, index) => (
                <Member
                  key={index}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>

          {/* electrical */}
          <div className='electrical'>
            <div className='align1'>
              <span className='electrical-title'>ELECTRICAL</span>
              <FontAwesomeIcon
                icon={faCarBattery}
                style={{
                  fontSize: '3rem',
                  color: 'rgb(9, 7, 69)',
                  marginLeft: '0.5rem',
                }}
              />
            </div>
            <div className='align'>
              {ElectricalMembers.map((member, index) => (
                <Member
                  key={index}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        </div>

        {/* software */}
        <div className='software'>
          <div className='align1'>
            <span className='software-title'>SOFTWARE</span>
            <FontAwesomeIcon
              icon={faCode}
              style={{
                fontSize: '3rem',
                color: 'rgb(9, 7, 69)',
                marginLeft: '0.5rem',
              }}
            />
          </div>
          <div className='align'>
            {SoftwareMembers.map((member, index) => (
              <Member
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
