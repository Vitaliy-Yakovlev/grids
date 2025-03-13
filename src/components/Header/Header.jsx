import Container from '../Main/Container/Container';
import s from './Header.module.css';

const Header = ({}) => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <img src="/img/cat.svg" alt="cat" className={s.logo} />
          <h1 className={s.label}>Котодім</h1>
        </div>
      </Container>
    </header>
  );
};

export default Header;
