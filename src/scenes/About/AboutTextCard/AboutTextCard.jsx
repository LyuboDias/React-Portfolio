import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  const left = '<'
  const right = '/>'

  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        I am originally from <span className={s.red}> Sofia, Bulgaria. 🇧🇬</span>
        <br />
        Since 2012, I've been based in London, United Kingdom.  
        <br/>
        In 2020, I graduated from 'Le Wagon' coding bootcamp <br/> as a full-stack developer. Since then, I have been working on a few personal projects.
      </p>

      <p>I very much enjoy:</p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Traveling 🗺️
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Sports ⚽ 🏀 🥊
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Food 🌮 🍝 🥗
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> and, of course, spending time on my PC (coding 🦆💻 and gaming 👾)
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
