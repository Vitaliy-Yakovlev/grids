import s from './Posts.module.css';

const Posts = ({}) => {
  return (
    <ul className={s.posts}>
      <li className={s.post}>
        <a href="#">
          <img src="/img/picture_2.png" alt="kitten" className={s.postImg} />
          <div className={s.overlay}>
            <h2 className={`${s.postTitle} ${s.subTitle}`}>
              Коти та їхні чудові навички: від полювання до загадкових здібностей
            </h2>
          </div>
        </a>
      </li>
      <li className={s.post}>
        <a href="#">
          <img src="/img/picture_2.png" alt="scary kitten" className={s.postImg} />
          <div className={s.overlay}>
            <h2 className={`${s.postTitle} ${s.subTitle}`}>
              Коти в літературі та мистецтві: від Егіпетських богів до сучасних майстрів
            </h2>
          </div>
        </a>
      </li>
      <li className={s.post}>
        <a href="#">
          <img src="/img/picture_3.png" alt="cat" className={s.postImg} />
          <div className={s.overlay}>
            <h2 className={`${s.postTitle} ${s.subTitle}`}>
              Котячі породи для активних власників: як вибрати компаньйона
            </h2>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default Posts;
