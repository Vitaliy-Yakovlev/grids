import { useLocation } from 'react-router';
import Container from '../Main/Container/Container';
import s from './Footer.module.css';

const Footer = ({}) => {
  const location = useLocation();
  const namePage = location.pathname.replace(/[/]/g, '');
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.container}>
          <img src={`/img/${namePage}.svg`} alt="cat" className={s.logo} />
          <h2 className={s.label}>{namePage}</h2>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
