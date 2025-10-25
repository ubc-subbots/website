import './member.css';
import Linkedin from '../../assets/linkedin3.png';
import Mail from '../../assets/mail.png';
import Instagram from '../../assets/insta4.png';
import GitHub from '../../assets/github3.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function member(props) {
  return (
    <div className='member-card'>

      <div className='image-container'>
        <LazyLoadImage
          src={props.image}
          alt='UBC Subbots Member'
          className='image-link'
          effect='blur'
          placeholderSrc='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg=='
        />

        <div className='image-overlay'>

          {props.media.linkedIn && (
            <a
              href={props.media.linkedIn}
              target='_blank'
              rel='noopener noreferrer'
              className='media-icon'
            >
              <img src={Linkedin} alt='LinkedIn' />
            </a>
          )}

          {props.media.email && (
            <a href={`mailto:${props.media.email}`} className='media-icon'>
              <img src={Mail} alt='Mail' />
            </a>
          )}

          {props.media.instagram && (
            <a
              href={props.media.instagram}
              target='_blank'
              rel='noopener noreferrer'
              className='media-icon'
            >
              <img src={Instagram} alt='Instagram' />
            </a>
          )}

          {props.media.github && (
            <a
              href={props.media.github}
              target='_blank'
              rel='noopener noreferrer'
              className='media-icon'
            >
              <img src={GitHub} alt='GitHub' />
            </a>
          )}

        </div>
      </div>

      <div className='member-info'>
        <span className='member-name'>{props.firstName} {props.lastName}</span>
        <span className='member-role'>{props.role == "lead" ? "Lead": ""}</span>
      </div>

    </div>
  );
}
