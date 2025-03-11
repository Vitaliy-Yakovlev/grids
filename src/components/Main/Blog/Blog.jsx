import s from './Blog.module.css';

const Blog = ({}) => {
  return (
    <ul className={s.blog}>
      <li className={s.blogItem}>
        <a href="#" className={s.blogLink}>
          <img src="src/img/1.png" alt="cat" className={s.blogPhoto} />
          <div className={s.wrapper}>
            <h2 className={`${s.blogTitle} ${s.subTitle}`}>Забавні факти про котів, які вас здивують</h2>
            <p className={s.blogText}>
              Веселі та цікаві факти про котів, які піднімуть вам настрій та розкажуть про їхні унікальність.
            </p>
          </div>
        </a>
      </li>
      <li className={s.blogItem}>
        <a href="#" className={s.blogLink}>
          <img src="src/img/2.png" alt="cats" className={s.blogPhoto} />
          <div className={s.wrapper}>
            <h2 className={`${s.blogTitle} ${s.subTitle}`}>Найпопулярніші породи котів: який кіт підходить вам?</h2>
            <p className={s.blogText}>
              Вивчіть найпопулярніші породи котів і їхні особливості, щоб зробити інформований вибір, який підходить
              саме вам.
            </p>
          </div>
        </a>
      </li>
      <li className={s.blogItem}>
        <a href="#" className={s.blogLink}>
          <img src="src/img/4.png" alt="red-cat" className={s.blogPhoto} />
          <div className={s.wrapper}>
            <h2 className={`${s.blogTitle} ${s.subTitle}`}>
              Як піклуватися про вашого пухнастого друга: догляд за котом
            </h2>
            <p className={s.blogText}>
              Дізнайтеся про основні аспекти догляду за котом, включаючи годування, гігієну та взаємодію з вашим
              улюбленцем.
            </p>
          </div>
        </a>
      </li>
      <li className={s.blogItem}>
        <a href="#" className={s.blogLink}>
          <img src="src/img/3.png" alt="red-cat" className={s.blogPhoto} />
          <div className={s.wrapper}>
            <h2 className={`${s.blogTitle} ${s.subTitle}`}>Історія та культурна значущість котів в усьому світ</h2>
            <p className={s.blogText}>
              Вивчіть, як коти впливали на культури різних народів та дізнайтеся історію спільного життя людей і котів.
            </p>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default Blog;
