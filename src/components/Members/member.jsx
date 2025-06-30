import './member.css';
import Linkedin from '../../assets/linkedin3.png';
import Mail from '../../assets/mail.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function member(props) {
  return (
    <div className='member-card'>
      <div className='member-content'>
        <div className='image-container'>
          <LazyLoadImage
            src={props.image}
            alt='Member'
            className='link-image'
            effect='blur'
            placeholderSrc='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg=='
          />
          <div className='image-overlay'>
            {props.linkedin && (
              <a
                href={props.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='linkedin-icon'
                style={{ marginRight: '10px' }}
              >
                <img src={Linkedin} alt='LinkedIn' />
              </a>
            )}
            {props.mail && (
              <a href={`mailto:${props.mail}`} className='mail-icon'>
                <img src={Mail} alt='Mail' />
              </a>
            )}
          </div>
        </div>
        <div className='member-info'>
          <span className='member-name'>{props.name}</span>
          <span className='member-role'>{props.role}</span>
        </div>
      </div>
    </div>
  );
}
