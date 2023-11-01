import casear from "../assets/img/salads/casear.png";
import greek from "../assets/img/salads/greek.png";
import caprese from "../assets/img/salads/caprese.png";

const saladsData = [
  {
    name: "Casear Salad",
    details: "Dijon mustard, Crouton, Garlic, Yolk, Parmesan",
    options: [
      { id: 1,size: "Small", price: '4.0', img: casear },
      { id: 2,size: "Large", price: '7.5', img: casear },
    ],
  },
  {
    name: "Greek Salad",
    details: "Red onion, Feta cheese, Green bell pepper, Cucumbers, Tomatoes",
    options: [
      { id: 3,size: "Small", price: '5.0', img: greek },
      { id: 4,size: "Large", price: '9.0', img: greek },
    ],
  },
  {
    name: "Caprese Salad",
    details: "Creamy mozzarella, Juicy tomatoes, Basil leaves",
    options: [
      { id: 5,size: "Small", price: '3.5', img: caprese },
      { id: 6,size: "Large", price: '5.0', img: caprese },
    ],
  },
];

export default saladsData;
