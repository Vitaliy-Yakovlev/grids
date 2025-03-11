import s from './Posts.module.css';
import data_post from '../../../data/data.json';

const Posts = ({}) => {
  return (
    <ul className={s.posts}>
      {data_post?.posts.map(({ urlImg, desc }) => (
        <li className={s.post}>
          <a href="#">
            <img src={urlImg} alt="kitten" className={s.postImg} />
            <div className={s.overlay}>
              <h2 className={`${s.postTitle} ${s.subTitle}`}>{desc}</h2>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
