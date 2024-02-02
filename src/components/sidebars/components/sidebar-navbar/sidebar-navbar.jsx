import { useDispatch } from "react-redux";
import styles from "./sidebar-navbar.module.css";
import { cartIcon, leftArrowIcon, clearPageIcon } from "./index";

const SidebarNavbar = ({ clearData, closeSidebar, title }) => {
  const dispatch = useDispatch();

  const closeSidebarHandler = () => {
    dispatch(closeSidebar());
  };

  const clearDataHandler = () => {
    dispatch(clearData());
  };

  return (
    <div className={styles.header}>
      <button onClick={closeSidebarHandler}>
        <img src={leftArrowIcon} alt="" />
      </button>
      <h2>
        {title} <img src={cartIcon} alt="icon" />
      </h2>
      <button className={styles.clear_btn} onClick={clearDataHandler}>
        Clear <img src={clearPageIcon} alt="" />
      </button>
    </div>
  );
};

export default SidebarNavbar;
