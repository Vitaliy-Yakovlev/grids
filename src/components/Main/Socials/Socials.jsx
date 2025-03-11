import s from './Socials.module.css';

const Socials = ({}) => {
  return (
    <div class={s.socials}>
      <h2 class={`${s.socialsTitle} ${s.title}`}>Соцмережі</h2>
      <ul class={s.socialsList}>
        <li class={s.socialsItem}>
          <a href="#" class={s.socialLink}>
            <img src="src/img/instagram.png" alt="instagram" class={s.socialIcon} />
            <p class={s.socialSubscripers}>230.000</p>
          </a>
        </li>
        <li class={s.socialsItem}>
          <a href="#" class={s.socialLink}>
            <img src="src/img/facebook.png" alt="facebook" class={s.socialIcon} />
            <p class={s.socialSubscripers}>230.000</p>
          </a>
        </li>
        <li class={s.socialsItem}>
          <a href="#" class={s.socialLink}>
            <img src="src/img/youtube.png" alt="youtube" class={s.socialIcon} />
            <p class={s.socialSubscripers}>230.000</p>
          </a>
        </li>
        <li class={s.socialsItem}>
          <a href="#" class={s.socialLink}>
            <img src="src/img/tiktok.png" alt="tiktok" class={s.socialIcon} />
            <p class={s.socialSubscripers}>230.000</p>
          </a>
        </li>
        <li class={s.socialsItem}>
          <a href="#" class={s.socialLink}>
            <img src="src/img/github.png" alt="github" class={s.socialIcon} />
            <p class={s.socialSubscripers}>230.000</p>
          </a>
        </li>
        <li class={s.socialsItem}>
          <a href="#" class={s.socialLink}>
            <img src="src/img/twitter.png" alt="twitter" class={s.socialIcon} />
            <p class={s.socialSubscripers}>230.000</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
