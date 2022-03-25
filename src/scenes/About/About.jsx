import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
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
              WHO IS <b className={s.red}>LYUBOMIR DIAS ?</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src='https://media2.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=790b76111703e44ceaa6f82797e5ecc2ef6af067e6dc5b1b&rid=giphy.gif&ct=g' alt="about" style={{borderRadius: '16px'}} />
          </div>
        </div>

        <h2 className={s.skills}>
          Some Techs <b className={s.red}>I use</b>
        </h2>
        <TechSkills />

        <h2 className={s.githubActivity}>
          <b className={s.red}>GitHub</b> Contributions
        </h2>
        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default About;
