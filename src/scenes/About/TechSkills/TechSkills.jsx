import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiGit,
  DiSass,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRuby,
  SiStorybook,
  SiHeroku,
} from 'react-icons/si';
import Tooltip from "@material-ui/core/Tooltip";

const techs = [
  {
    icon: <DiJavascript1 />,
    title: 'JavaScript',
  },
  {
    icon: <SiTypescript />,
    title: 'TypeScript',
  },
  {
    icon: <DiNodejs />,
    title: 'NodeJS',
  },
  {
    icon: <DiReact />,
    title: 'ReactJS',
  },
  {
    icon: <DiPostgresql />,
    title: 'PostgreSQL',
  },
  {
    icon: <DiSass />,
    title: 'SasS',
  },
  {
    icon: <SiHeroku />,
    title: 'Heroku',
  },
  {
    icon: <SiRuby />,
    title: 'Ruby on Rails',
  },
  {
    icon: <SiStorybook />,
    title: 'Storybook',
  },
  {
    icon: <DiGit />,
    title: 'Git',
  },
]

const TechSkills = () => {
  return (
    <ul className={s.container}>
      {techs.map((tech, index) => {
          return (
            <Tooltip
              title={tech.title}
              placement="top"
              key={index}
            >
              <li 
                  className={s.techIcon} 
                  data-toggle="tooltip" 
                  title={tech.title}
              >
                  {tech.icon}
              </li>
            </Tooltip>
          )
      })}
    </ul>
  );
};

export default TechSkills;
