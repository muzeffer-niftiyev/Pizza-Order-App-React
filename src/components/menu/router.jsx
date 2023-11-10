import { Route, Routes, Products, datas } from "./index";

const Router = ({ key }) => {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<Products key={key} data={datas.pizzasData} />}
      />
      <Route
        path="/drinks"
        element={<Products key={key} data={datas.drinksData} />}
      />
      <Route
        path="/salad"
        element={<Products key={key} data={datas.saladsData} />}
      />
      <Route
        path="/sauce"
        element={<Products key={key} data={datas.saucesData} />}
      />
    </Routes>
  );
};

export default Router;
