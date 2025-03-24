import { NavLink, useLocation } from 'react-router';
import Container from '../Main/Container/Container';
import s from './Header.module.css';

const Header = ({}) => {
  const location = useLocation();
  const logo = location.pathname.replace(/[/]/g, '');
  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <img src={`/img/${logo ? logo : 'cats'}.svg`} alt="cat" className={s.logo} />
          <NavLink className={s.label} to="/cats">
            cats
          </NavLink>
          <NavLink className={s.label} to="/newspaper" end>
            newspaper
          </NavLink>

          <NavLink className={s.label} to="/newscasts" end>
            newscasts
          </NavLink>
        </div>
      </Container>
    </header>
  );
};

export default Header;
