import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
// import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import cv from '../../assets/cv.jpg'

const Resume = () => {

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>
        <img src={cv} alt="resume" style={{width: '80%', borderRadius: '16px'}} />
      </div>
    </BaseLayout>
  );
};

export default Resume;
