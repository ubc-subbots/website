import React, { useState, useEffect } from 'react';
import {
  faCode,
  faTools,
  faCarBattery,
  faBriefcase,
  faMicrophone,
  faCrown,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './members.css';
import Member from './member';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TEAM_META = {
  CoCaptains: { title: 'CO-CAPTAINS', icon: faCrown },
  Admin: { title: 'ADMIN + BUSINESS', icon: faBriefcase },
  Actuator: { title: 'ACTUATOR', icon: faTools },
  Electrical: { title: 'ELECTRICAL', icon: faCarBattery },
  Software: { title: 'SOFTWARE', icon: faCode },
  'Sound Localization': { title: 'SOUND LOCALIZATION', icon: faMicrophone },
  'Frames-Enclosures': { title: 'FRAMES & ENCLOSURES', icon: faToolbox },
};

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/members.json`)
      .then((res) => res.json())
      .then(setMembers)
      .catch(console.error);
  }, []);

  // Helper function to determine if someone is a lead
  const isLead = (role) => {
    return (
      role.toLowerCase().includes('lead') ||
      role.toLowerCase().includes('captain') ||
      role.toLowerCase().includes('director')
    );
  };

  // Helper function to sort members within a team
  const sortTeamMembers = (teamMembers) => {
    return teamMembers.sort((a, b) => {
      // 1. Leads first, then members
      const aIsLead = isLead(a.role);
      const bIsLead = isLead(b.role);
      if (aIsLead && !bIsLead) return -1;
      if (!aIsLead && bIsLead) return 1;

      // 2. Members with images first
      const aHasImage = a.image && a.image !== '';
      const bHasImage = b.image && b.image !== '';
      if (aHasImage && !bHasImage) return -1;
      if (!aHasImage && bHasImage) return 1;

      // 3. Alphabetically by last name
      return a.lastName.localeCompare(b.lastName);
    });
  };

  return (
    <div className='members-container'>
      {/* ----- hero / heading ----- */}
      <div className='members-title'>
        <LazyLoadImage
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
        let teamMembers;

        if (teamKey === 'CoCaptains') {
          // Special handling for Co-Captains
          teamMembers = members.filter((m) =>
            m.role.toLowerCase().includes('co-captain')
          );
        } else {
          // Regular team filtering
          teamMembers = members.filter((m) => m.team === teamKey && !m.role.toLowerCase().includes('co-captain'));
        }

        if (teamMembers.length === 0) { return null; }

        // Sort the team members
        const sortedTeamMembers = sortTeamMembers(teamMembers);

        return (
          <section
            key={teamKey}
            className={teamKey.toLowerCase().replace(/\s+/g, '-')}
          >
            <div className='align1'>
              <span
                className={teamKey === 'CoCaptains'
                  ? 'co-captains-title'
                  : `${teamKey.toLowerCase().replace(/\s+/g, '-')}-title`}
              >
                {meta.title}
              </span>
              <FontAwesomeIcon icon={meta.icon} className='icon-common' />
            </div>
            <div className='align'>
              {sortedTeamMembers.map((m, i) => (
                <Member
                  key={i}
                  image={
                    m.image
                      ? `${process.env.PUBLIC_URL}/images/members/${m.image}`
                      : `${process.env.PUBLIC_URL}/images/subbots-logo/subbots_logo_yellow_round.png`
                  }
                  name={`${m.firstName} ${m.lastName}`}
                  role={teamKey === 'CoCaptains' ? '' : m.role} // Hide role for co-captains
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
