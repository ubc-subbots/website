import React, { useState, useEffect } from 'react';

import {
  faCode,
  faTools,
  faCarBattery,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './members.css';
import Member from './member';

const TEAM_META = {
  Admin: { title: 'ADMIN + BUSINESS', icon: faBriefcase },
  Actuator: { title: 'ACTUATOR', icon: faTools },
  Electrical: { title: 'ELECTRICAL', icon: faCarBattery },
  Software: { title: 'SOFTWARE', icon: faCode },
};

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/members.json`)
      .then((res) => res.json())
      .then(setMembers)
      .catch(console.error);
  }, []);

  return (
    <div className='members-container'>
      {/* ----- hero / heading ----- */}
      <div className='members-title'>
        <img
          src={`${process.env.PUBLIC_URL}/images/members/team_photo_2024_resized.jpg`}
          alt='group'
          className='group'
        />
        <span className='member-title1'>MEET THE TEAM</span>
        <span className='member-title2'>
          United by curiosity and driven by purpose, our {members.length}+ team
          members bring unique skills and shared passion to every step of the
          journey!
        </span>
      </div>

      {Object.entries(TEAM_META).map(([teamKey, meta]) => {
        const teamMembers = members.filter((m) => m.team === teamKey);
        if (teamMembers.length === 0) return null; // skip empty groups

        return (
          <section key={teamKey} className={teamKey.toLowerCase()}>
            <div className='align1'>
              <span className={`${teamKey.toLowerCase()}-title`}>
                {meta.title}
              </span>
              <FontAwesomeIcon icon={meta.icon} className='icon-common' />
            </div>
            <div className='align'>
              {teamMembers
                .sort((a, b) => {
                  // Primary sort: members with images first
                  const aHasImage = a.image && a.image !== '';
                  const bHasImage = b.image && b.image !== '';
                  if (aHasImage && !bHasImage) return -1;
                  if (!aHasImage && bHasImage) return 1;

                  // Secondary sort: alphabetically by last name
                  return a.lastName.localeCompare(b.lastName);
                })
                .map((m, i) => (
                  <Member
                    key={i}
                    image={
                      m.image
                        ? `${process.env.PUBLIC_URL}/images/members/${m.image}`
                        : `${process.env.PUBLIC_URL}/images/members/default_avatar.png`
                    }
                    name={`${m.firstName} ${m.lastName}`}
                    role={m.role}
                    linkedin={m.linkedin}
                    mail={m.mail}
                  />
                ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
