import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import aboutPromoImg from '../../assets/about-promo.svg';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import GithubActivity from './GithubActivity/GithubActivity';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              About <b className={s.purple}>ME</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src='https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=790b761187182339e59036f38d74d0d7730b8f32b2ef1d50&rid=giphy.gif&ct=g' alt="about" />
          </div>
        </div>

        <h2 className={s.skills}>
          Some Techs <b className={s.purple}>I use</b>
        </h2>
        <TechSkills />

        <h2 className={s.githubActivity}>
          <b className={s.purple}>GitHub</b> Contributions
        </h2>
        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default About;
