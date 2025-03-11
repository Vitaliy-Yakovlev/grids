import s from './Footer.module.css';

const Footer = ({}) => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <img src="/img/cat.svg" alt="cat" className={s.logo} />
        <h2 className={s.label}>Котодім</h2>
      </div>
    </footer>
  );
};

export default Footer;
