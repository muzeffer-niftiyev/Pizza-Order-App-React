import { Route, Routes, Products, datas } from "./index";

const MenuRouter = () => {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<Products key="pizza" data={datas.pizzasData} />}
      />
      <Route
        path="/drinks"
        element={<Products key="drinks" data={datas.drinksData} />}
      />
      <Route
        path="/salad"
        element={<Products key="salad" data={datas.saladsData} />}
      />
      <Route
        path="/sauce"
        element={<Products key="sauce" data={datas.saucesData} />}
      />
    </Routes>
  );
};

export default MenuRouter;
