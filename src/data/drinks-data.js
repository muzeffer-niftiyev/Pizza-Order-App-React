import pepsi1 from "../assets/img/drinks/pepsi-330-ml.png";
import pepsi2 from "../assets/img/drinks/pepsi-500-ml.png";
import pepsi3 from "../assets/img/drinks/pepsi-1-l.png";
import fanta1 from "../assets/img/drinks/fanta-330-ml.png";
import fanta2 from "../assets/img/drinks/fanta-500-ml.png";
import fanta3 from "../assets/img/drinks/fanta-1-l.png";
import sprite1 from "../assets/img/drinks/sprite-330-ml.png";
import sprite2 from "../assets/img/drinks/sprite-500-ml.png";
import sprite3 from "../assets/img/drinks/sprite-1-l.png";
import fuse1 from "../assets/img/drinks/fuse-tea-limon.png";
import fuse2 from "../assets/img/drinks/fuse-tea-mango.png";
import fuse3 from "../assets/img/drinks/fuse-tea-watermelon.png";
import still1 from "../assets/img/drinks/still-500-ml.png";
import still2 from "../assets/img/drinks/still-1-l.png";
import carb1 from "../assets/img/drinks/carb-500-ml.png";
import carb2 from "../assets/img/drinks/carb-1-l.png";

const drinksData = [
  {
    name: "Pepsi",
    options: [
      { id: 1, size: "330 ml", price: "1.0", img: pepsi1 },
      { id: 2, size: "500 ml", price: "2.0", img: pepsi2 },
      { id: 3, size: "1 l", price: "2.5", img: pepsi3 },
    ],
  },
  {
    name: "Fanta",
    options: [
      { id: 4, size: "330 ml", price: "1.0", img: fanta1 },
      { id: 5, size: "500 ml", price: "2.5", img: fanta2 },
      { id: 6, size: "1 l", price: "3.0", img: fanta3 },
    ],
  },
  {
    name: "Sprite",
    options: [
      { id: 7, size: "330 ml", price: "2.0", img: sprite1 },
      { id: 8, size: "500 ml", price: "3.0", img: sprite2 },
      { id: 9, size: "1 l", price: "3.5", img: sprite3 },
    ],
  },
  {
    name: "Fuse Tea",
    options: [
      { id: 10, size: "Lemon", price: "2.5", img: fuse1 },
      { id: 11, size: "Mango", price: "2.0", img: fuse2 },
      { id: 12, size: "Watermelon", price: "2.0", img: fuse3 },
    ],
  },
  {
    name: "Still Water",
    options: [
      { id: 13, size: "500 ml", price: "0.5", img: still1 },
      { id: 14, size: "1 l", price: "1.5", img: still2 },
    ],
  },
  {
    name: "Sparking Water",
    options: [
      { id: 15, size: "500 ml", price: "1.0", img: carb1 },
      { id: 16, size: "1 l", price: "2.0", img: carb2 },
    ],
  },
];

export default drinksData;
