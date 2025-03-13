import { useState, useEffect } from 'react';
import s from './Posts.module.css';
import data_post from '../../../data/data.json';

const Posts = ({}) => {
  const [resizeWindow, setResizeWindow] = useState(innerWidth);

  useEffect(() => {
    const handlerResizeWindow = e => setResizeWindow(e.currentTarget.innerWidth);
    window.addEventListener('resize', handlerResizeWindow);

    return () => window.removeEventListener('resize', handlerResizeWindow);
  }, [resizeWindow]);

  return (
    <ul className={s.posts}>
      {data_post?.posts.map(({ urlImg, desc, urlIngSmall }) => {
        return (
          <li className={s.post}>
            <a href="#">
              <img src={resizeWindow >= 768 ? urlImg : urlIngSmall} alt="kitten" className={s.postImg} />
              <div className={s.overlay}>
                <h2 className={`${s.postTitle} ${s.subTitle}`}>{desc}</h2>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
