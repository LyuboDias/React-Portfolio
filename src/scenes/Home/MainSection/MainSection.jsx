import s from './MainSection.module.scss';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hello There! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> Lyubomir Dias</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Full Stack Developer',
              'Team Player',
              'Problem Solver',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src='https://media2.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif?cid=790b7611a284ad98005d3ff5b16403612230cb2aa3a6fe97&rid=giphy.gif&ct=g'
        wrapperClassName={s.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
