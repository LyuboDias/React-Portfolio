import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            WHY I CHOSE <span className={s.red}> CODING ?</span>{' '}
          </h1>

          <div className={s.description}>
            <p>
              I've spent a lot of time on my PC, <strong className={s.red}>primarily gaming</strong>, since I was a teenager. 
            </p>

            <p>
              In the year 2020, I've chosen to pursue my lifelong dream <br/> of working in the technology business. <br/> Building new <b className={s.red}> Web Technologies and Products</b> while coding <br/> and learning daily are two of my main interests.
            </p>

            <p>
              As an enthusiastic Full Stack Software Developer,<br/> I've built Web apps using <b className={s.red}>JavaScript, ReactJs, Ruby on Rails, PostgreSQL</b>, <br/> and a few more exciting technologies.
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>MY SOCIAL LINKS</h1>
        <p>
          <span className={s.red}>Connect </span>with me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/LyuboDias"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/lyubo_dias"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/lyubomir-dias/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
