import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME}>
        <img src='/duck-icon.png' alt='logo' style={{width: '30px'}} />
      </Link>
    </div>
  );
};

export default Logo;

