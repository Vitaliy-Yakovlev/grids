import s from './Video.module.css';

const Video = () => {
  return <div className={s.video}>
  <h2 className={s.videoTitle}>Відео з пухнастиком</h2>
  <img src="./img/picture.png" alt="video"/>
</div>
}

export default Video;