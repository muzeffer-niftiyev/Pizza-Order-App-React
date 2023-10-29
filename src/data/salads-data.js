import casear from "../assets/img/salads/casear.png";
import greek from "../assets/img/salads/greek.png";
import caprese from "../assets/img/salads/caprese.png";

const saladsData = [
  {
    id: 1,
    name: "Casear Salad",
    options: [
      { size: "Small", price: 4, img: casear },
      { size: "Large", price: 7, img: casear },
    ],
  },
  {
    id: 2,
    name: "Greek Salad",
    options: [
      { size: "Small", price: 5, img: greek },
      { size: "Large", price: 9, img: greek },
    ],
  },
  {
    id: 3,
    name: "Caprese Salad",
    options: [
      { size: "Small", price: 3, img: caprese },
      { size: "Large", price: 5, img: caprese },
    ],
  },
];

export default saladsData;