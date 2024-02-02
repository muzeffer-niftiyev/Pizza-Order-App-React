import pizzaIcon from "../../../../assets/icons/header-pizza-icon.svg";

const NavbarTitle = () => {
  return (
    <header>
      <div>
        <img src={pizzaIcon} alt="" />
        <h1>Pizza</h1>
      </div>
      <span>House</span>
    </header>
  );
};

export default NavbarTitle;
