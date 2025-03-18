import s from './Socials.module.css';
import data_socials from '../../../data/data.json';

const Socials = ({}) => {
  return (
    <div className={s.socials}>
      <h2 className={`${s.socialsTitle} ${s.title}`}>Соцмережі</h2>
      <ul className={s.socialsList}>
        {data_socials?.socials.map(({ urlImg, desc, alt }, i) => (
          <li className={s.socialsItem} key={i}>
            <a href="#" className={s.socialLink}>
              <img src={urlImg} alt={alt} className={s.socialIcon} />
              <p className={s.socialSubscripers}>{desc}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
