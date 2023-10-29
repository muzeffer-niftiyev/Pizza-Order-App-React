import pepsi1 from "../assets/img/drinks/pepsi-330-ml.png";
import pepsi2 from '../assets/img/drinks/pepsi-500-ml.png';
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
import still1 from '../assets/img/drinks/still-500-ml.png';
import still2 from '../assets/img/drinks/still-1-l.png';
import carb1 from "../assets/img/drinks/carb-500-ml.png";
import carb2 from "../assets/img/drinks/carb-1-l.png";

const drinksData = [
  {
    id: 1,
    name: "Pepsi",
    options: [
      { size: "330 ml", price: 1, img: pepsi1 },
      { size: "500 ml", price: 2, img: pepsi2 },
      { size: "1 l", price: 3, img: pepsi3 },
    ],
  },
  {
    id: 2,
    name: "Fanta",
    options: [
      { size: "330 ml", price: 1, img: fanta1 },
      { size: "500 ml", price: 2, img: fanta2 },
      { size: "1 l", price: 4, img: fanta3 },
    ],
  },
  {
    id: 3,
    name: "Sprite",
    options: [
      { size: "330 ml", price: 2, img: sprite1 },
      { size: "500 ml", price: 3, img: sprite2 },
      { size: "1 l", price: 4, img: sprite3 },
    ],
  },
  {
    id: 4,
    name: "Fuse Tea",
    options: [
      { size: "Lemon", price: 4, img: fuse1 },
      { size: "Mango", price: 3, img: fuse2 },
      { size: "Watermelon", price: 3, img: fuse3 },
    ],
  },
  {
    id: 5,
    name: "Still Water",
    options: [
      { size: "500 ml", price: 1, img: still1 },
      { size: "1 l", price: 3, img: still2 },
    ],
  },
  {
    id: 6,
    name: "Sparking Water",
    options: [
      { size: "500 ml", price: 1, img: carb1 },
      { size: "1 l", price: 3, img: carb2 },
    ],
  },
];

export default drinksData;
