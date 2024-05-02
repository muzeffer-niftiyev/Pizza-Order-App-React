import { mainPizzaIcon } from "../../index";

const NavbarTitle = () => {
  return (
    <header>
      <div>
        <img src={mainPizzaIcon} alt="" />
        <h1>Pizza</h1>
      </div>
      <span>House</span>
    </header>
  );
};

export default NavbarTitle;
