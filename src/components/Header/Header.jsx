import s from './Header.module.css';

const Header = ({}) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <img src="/src/img/cat.svg" alt="cat" className={s.logo} />
        <h1 className={s.label}>Котодім</h1>
      </div>
    </header>
  );
};

export default Header;
