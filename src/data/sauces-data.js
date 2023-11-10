import mayo from "../assets/img/sauces/mayo.png";
import ketchup from "../assets/img/sauces/ketchup.png";
import mustard from "../assets/img/sauces/mustard.png";

const saucesData = [
  {
    name: "Ketchup",
    options: [
      { id: 1, size: "Small", price: "0.5", img: ketchup },
      { id: 2, size: "Large", price: "1.0", img: ketchup },
    ],
  },
  {
    name: "Mustard",
    options: [
      { id: 3, size: "Small", price: "1.0", img: mustard },
      { id: 4, size: "Large", price: "1.5", img: mustard },
    ],
  },
  {
    name: "Mayonassie",
    options: [
      { id: 5, size: "Small", price: "0.5", img: mayo },
      { id: 6, size: "Large", price: "1.0", img: mayo },
    ],
  },
];

export default saucesData;
