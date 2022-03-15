import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  const left = '<'
  const right = '/>'

  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        I was{' '}
        born and raised in <span className={s.red}> Sofia, Bulgaria. 🇧🇬</span>
        <br />
        I've been living and working in the UK since 2012.  
        <br /> I very much enjoy sports(⚽ 🏀 🥊) , food 🌮 🍝 🥗, traveling 🗺️
        <br />
        and of course spending time on my PC (coding 🦆💻 and gaming 👾).
        <br />
        <br />
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Sports
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>

      <p
        style={{
          color: '#00afc4',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        {left} Developers turn coffee into code {right}{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
