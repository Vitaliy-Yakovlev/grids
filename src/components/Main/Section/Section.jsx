import s from './Section.module.css';

const Section = ({ children }) => {
  return <section className={s.longread}>{children}</section>;
};

export default Section;
