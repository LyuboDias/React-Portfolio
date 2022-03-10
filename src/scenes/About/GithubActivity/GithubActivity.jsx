import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: '#e50035',
    grade3: '#ff3262',
    grade2: '#ff7f9d',
    grade1: '#ffb2c4',
    grade0: '#ffe5eb', 
  }
  return (
    <div className={s.container}>
      <GitHubCalendar
        username="LyuboDias"
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;
