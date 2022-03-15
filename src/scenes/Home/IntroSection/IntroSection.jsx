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
              Since teenage years I have been spending a lot of time on my PC 
              <br/>
              (mainly gaming 👾👾👾) <strong className={s.red}>so ... </strong>
            </p>

            <p>
              In 2020 I have decided to follow my big passion - working in <strong className={s.red}>Tech</strong> industry
            </p>

            <p>
              My fields of Interest are building new
              <i>
                <b className={s.red}>
                  {' '}
                  Web Technologies and Products
                </b>
              </i>
              <br/>
              while coding and learning daily
            </p>

            <p>
              As passionate Full Stack Software Developer 💻  <br />I
              have an experience of building{' '}
              <i>
                <b className={s.red}>Web</b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.red}>
                  JavaScript, ReactJs, Ruby on Rails, PostgreSQL
                </b>
              </i>{' '}
              and some other cool libraries
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
