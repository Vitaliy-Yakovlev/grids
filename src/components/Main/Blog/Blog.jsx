import s from './Blog.module.css';
import data_blog from '../../../data/data.json';

const Blog = ({}) => {
  return (
    <ul className={s.blog}>
      {data_blog?.blog.map(({ urlImg, desc, title, alt }) => (
        <li className={s.blogItem}>
          <a href="#" className={s.blogLink}>
            <img src={urlImg} alt={alt} className={s.blogPhoto} />
            <div className={s.wrapper}>
              <h2 className={`${s.blogTitle} ${s.subTitle}`}>{title}</h2>
              <p className={s.blogText}>{desc}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Blog;
