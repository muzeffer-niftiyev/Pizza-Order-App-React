import styles from "./liked-button.module.css";
import { likedCountIcon } from "../../index";

const LikedButton = () => {
  return (
    <button>
      <div className={styles.icon}>
        <img src={likedCountIcon} alt="" />
        <p>10</p>
      </div>
      <p className={styles.desc}>Liked</p>
    </button>
  );
};

export default LikedButton;
