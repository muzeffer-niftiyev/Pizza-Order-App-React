import {
  carb1,
  carb2,
  fuse1,
  fuse2,
  fuse3,
  fanta1,
  fanta2,
  pepsi1,
  pepsi2,
  pepsi3,
  fanta3,
  still1,
  still2,
  sprite1,
  sprite2,
  sprite3,
} from "../assets/img/drinks";

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
    name: "Sparkling Water",
    options: [
      { id: 15, size: "500 ml", price: "1.0", img: carb1 },
      { id: 16, size: "1 l", price: "2.0", img: carb2 },
    ],
  },
];

export default drinksData;
