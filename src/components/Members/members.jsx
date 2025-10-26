import React, { useState, useEffect } from 'react';
import {
  faCode,
  faTools,
  faBolt,
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
  captain:            { title: 'CO-CAPTAINS', icon: faCrown },
  admin:              { title: 'ADMIN + BUSINESS', icon: faBriefcase },
  actuators:          { title: 'ACTUATORS', icon: faTools },
  electrical:         { title: 'ELECTRICAL', icon: faBolt },
  software:           { title: 'SOFTWARE', icon: faCode },
  sound_localization: { title: 'SOUND LOCALIZATION', icon: faMicrophone },
  mechanical:         { title: 'FRAMES & ENCLOSURES', icon: faToolbox },
};

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/2025/members.json`)
      .then((res) => res.json())
      .then(setMembers)
      .catch(console.error);
  }, []);

  // Helper function to determine if someone is a lead
  const isLead = (role) => {
    return role.toLowerCase().includes('lead');
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
      <div className='members-header'>
        <LazyLoadImage
          src={`${process.env.PUBLIC_URL}/images/members/team_photo_2024_resized.jpg`}
          alt='2024 UBC Subbots Team Photo'
          className='member-header-photo'
        />

        <div className='member-header-title'>MEET THE TEAM</div>
        <div className='member-header-content'>
          United by curiosity and driven by purpose, our {members.length}+ team
          members bring unique skills and shared passion to every step of the
          journey!
        </div>
      </div>



      {Object.entries(TEAM_META).map(([teamKey, meta]) => {
        let teamMembers;

        if (teamKey === 'captain') {
          // Special handling for Co-Captains
          teamMembers = members.filter((m) =>
            m.team.toLowerCase().includes('captain')
          );

        } else {
          // Regular team filtering
          teamMembers = members.filter(
            (m) => m.team === teamKey && !m.team.toLowerCase().includes('captain')
          );
        }

        if (teamMembers.length === 0) {
          return null;
        }

        // Sort the team members
        const sortedTeamMembers = sortTeamMembers(teamMembers);

        return (
          <section
            key={teamKey}
            className="subteam"
          >

            <div className='subteam-header'>
              <span>{meta.title}</span>
              <FontAwesomeIcon icon={meta.icon} className='icon-common' />
            </div>

            <div className='subteam-members'>
              {sortedTeamMembers.map((meta, key) => (
                <Member
                  key={key}
                  image={
                    meta.image
                      ? `${process.env.PUBLIC_URL}/images/members/2025/${meta.image}`
                      : `${process.env.PUBLIC_URL}/images/subbots-logo/subbots_logo_yellow_round.png`
                  }
                  firstName={meta.firstName}
                  lastName={meta.lastName}
                  role={meta.role}
                  media={meta.media}
                />
              ))}
            </div>

          </section>
        );
      })}



    </div>
  );
}
