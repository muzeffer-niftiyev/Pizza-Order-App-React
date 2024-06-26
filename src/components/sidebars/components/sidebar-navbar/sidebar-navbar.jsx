import { useDispatch } from "react-redux";
import styles from "./sidebar-navbar.module.css";
import { redCartIcon, leftArrowIcon, clearItemsIcon } from "./index";

const SidebarNavbar = ({ clearData, closeSidebar, title }) => {
  const dispatch = useDispatch();

  const closeSidebarHandler = () => {
    dispatch(closeSidebar());
  };

  const clearDataHandler = () => {
    dispatch(clearData());
  };

  return (
    <nav className={styles.header}>
      <button onClick={closeSidebarHandler}>
        <img src={leftArrowIcon} alt="" />
      </button>
      <h2>
        {title} <img src={redCartIcon} alt="icon" />
      </h2>
      <button className={styles.clear_btn} onClick={clearDataHandler}>
        Clear <img src={clearItemsIcon} alt="" />
      </button>
    </nav>
  );
};

export default SidebarNavbar;
