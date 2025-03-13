import Container from '../Main/Container/Container';
import s from './Footer.module.css';

const Footer = ({}) => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.container}>
          <img src="/img/cat.svg" alt="cat" className={s.logo} />
          <h2 className={s.label}>Котодім</h2>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
