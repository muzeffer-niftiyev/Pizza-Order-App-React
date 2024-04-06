import {
  pizzaImg1,
  pizzaImg2,
  pizzaImg3,
  pizzaImg4,
  pizzaImg5,
  pizzaImg6,
  pizzaImg7,
  pizzaImg8,
  pizzaImg9,
  pizzaImg10,
  pizzaImg11,
  pizzaImg12,
  pizzaImg13,
  pizzaImg14,
  pizzaImg15,
  pizzaImg16,
  pizzaImg17,
  pizzaImg18,
  pizzaImg19,
  pizzaImg20,
  pizzaImg21,
} from "../assets/img/pizzas";

const pizzasData = [
  {
    name: "Marinara",
    details: "Marinara sauce, Garlic, Olive oil, Basil, Oregano",
    imgUrl: pizzaImg1,
    options: [
      { id: 1, size: "Small", price: "14.0" },
      { id: 2, size: "Medium", price: "18.5" },
      { id: 3, size: "Large", price: "25.0" },
    ],
  },
  {
    name: "Margherita",
    details: "Tomato sauce, Mozzarella, Olive oil, Basil leaves",
    imgUrl: pizzaImg2,
    options: [
      { id: 4, size: "Small", price: "12.5" },
      { id: 5, size: "Medium", price: "16.0" },
      { id: 6, size: "Large", price: "20.0" },
    ],
  },
  {
    name: "Ai Broccoli",
    details:
      "Tomato sauce, Mozzarella, Broccoli, Garlic, Chili peppers, Oregano",
    imgUrl: pizzaImg3,
    options: [
      { id: 7, size: "Small", price: "8.0" },
      { id: 8, size: "Medium", price: "10.5" },
      { id: 9, size: "Large", price: "12.5" },
    ],
  },
  {
    name: "Carbonara",
    details:
      "Pecorino Romano Cheese, Heavy cream, Scallions, Eggs, Black pepper",
    imgUrl: pizzaImg4,
    options: [
      { id: 10, size: "Small", price: "8.5" },
      { id: 11, size: "Medium", price: "12.0" },
      { id: 12, size: "Large", price: "15.0" },
    ],
  },
  {
    name: "Carpaccio",
    details:
      "Tomato sauce, Mozzarella, Beef carpaccio, Arugula, Parmigiano Reggiano",
    imgUrl: pizzaImg5,
    options: [
      { id: 13, size: "Small", price: "18.0" },
      { id: 14, size: "Medium", price: "22.5" },
      { id: 15, size: "Large", price: "27.0" },
    ],
  },
  {
    name: "Funghi",
    details: "Tomato Sauce, Mozzarella, Fresh mushrooms",
    imgUrl: pizzaImg6,
    options: [
      { id: 16, size: "Small", price: "14.0" },
      { id: 17, size: "Medium", price: "18.0" },
      { id: 18, size: "Large", price: "22.5" },
    ],
  },
  {
    name: "Gamberetti",
    details: "Tomato sauce, Mozzarella, Shrimps",
    imgUrl: pizzaImg7,
    options: [
      { id: 19, size: "Small", price: "10.5" },
      { id: 20, size: "Medium", price: "14.5" },
      { id: 21, size: "Large", price: "18.0" },
    ],
  },
  {
    name: "Mazza",
    details: "Tomato sauce, Mozzarella, Bacon, Eggs, Onions, Chili peppers",
    imgUrl: pizzaImg8,
    options: [
      { id: 22, size: "Small", price: "20.0" },
      { id: 23, size: "Medium", price: "26.0" },
      { id: 24, size: "Large", price: "30.0" },
    ],
  },
  {
    name: "Mozzarella",
    details: "Tomato Sauce, Buffalo mozzarella",
    imgUrl: pizzaImg9,
    options: [
      { id: 25, size: "Small", price: "12.5" },
      { id: 26, size: "Medium", price: "16.0" },
      { id: 27, size: "Large", price: "20.5" },
    ],
  },
  {
    name: "Napoletana",
    details: "Tomato sauce, Mozzarella, Anchovies, Olive oil",
    imgUrl: pizzaImg10,
    options: [
      { id: 28, size: "Small", price: "16.0" },
      { id: 29, size: "Medium", price: "20.0" },
      { id: 30, size: "Large", price: "24.0" },
    ],
  },
  {
    name: "Peperoni",
    details: "Tomato sauce, Mozzarella, Chili peppers",
    imgUrl: pizzaImg11,
    options: [
      { id: 31, size: "Small", price: "18.0" },
      { id: 32, size: "Medium", price: "22.5" },
      { id: 33, size: "Large", price: "28.0" },
    ],
  },

  {
    name: "Piccantino",
    details: "Tomato sauce, Mozzarella, Salame piccantino",
    imgUrl: pizzaImg12,
    options: [
      { id: 34, size: "Small", price: "14.5" },
      { id: 35, size: "Medium", price: "18.0" },
      { id: 36, size: "Large", price: "22.0" },
    ],
  },
  {
    name: "Regina",
    details: "Tomato sauce, Mozzarella, Ham, Champignons",
    imgUrl: pizzaImg13,
    options: [
      { id: 37, size: "Small", price: "15.5" },
      { id: 38, size: "Medium", price: "19.0" },
      { id: 39, size: "Large", price: "25.5" },
    ],
  },
  {
    name: "Salmone",
    details: "Tomato sauce, Mascarpone cheese, Smoked salmon, rocket salad ",
    imgUrl: pizzaImg14,
    options: [
      { id: 40, size: "Small", price: "20.5" },
      { id: 41, size: "Medium", price: "24.0" },
      { id: 42, size: "Large", price: "28.0" },
    ],
  },
  {
    name: "Spinaci",
    details: "Tomato sauce, Mozzarella, Spinach, Salt, Pepper, Olive oil",
    imgUrl: pizzaImg15,
    options: [
      { id: 43, size: "Small", price: "16.0" },
      { id: 44, size: "Medium", price: "20.5" },
      { id: 45, size: "Large", price: "24.0" },
    ],
  },
  {
    name: "Vegetariana",
    details: "Tomato sauce, Mozzarella, Vegetables",
    imgUrl: pizzaImg16,
    options: [
      { id: 46, size: "Small", price: "12.5" },
      { id: 47, size: "Medium", price: "16.0" },
      { id: 48, size: "Large", price: "20.0" },
    ],
  },
  {
    name: "Viennese",
    details: "Tomato sauce, Mozzarella, German sausage, Oregano, Olive oil",
    imgUrl: pizzaImg17,
    options: [
      { id: 49, size: "Small", price: "10.0" },
      { id: 50, size: "Medium", price: "14.5" },
      { id: 51, size: "Large", price: "26.0" },
    ],
  },
  {
    name: "Tartufata",
    details:
      "Mozzarella, Mushrooms, Oyster mushrooms, Arugula, Parmesan, Truffle oil",
    imgUrl: pizzaImg18,
    options: [
      { id: 52, size: "Small", price: "14.0" },
      { id: 53, size: "Medium", price: "18.0" },
      { id: 54, size: "Large", price: "22.0" },
    ],
  },
  {
    name: "Tirolese",
    details:
      "Tomato sauce, Stracchino cheese, Speck (smoked ham), sometimes mushrooms",
    imgUrl: pizzaImg19,
    options: [
      { id: 55, size: "Small", price: "16.0" },
      { id: 56, size: "Medium", price: "20.5" },
      { id: 57, size: "Large", price: "25.0" },
    ],
  },
  {
    name: "Toscana",
    details:
      "Tomato sauce, Pecorino cheese, Bell pepper, Anchovies or tuna, Fresh basil leafes",
    imgUrl: pizzaImg20,
    options: [
      { id: 58, size: "Small", price: "22.5" },
      { id: 59, size: "Medium", price: "26.0" },
      { id: 60, size: "Large", price: "30.0" },
    ],
  },
  {
    name: "Diavola",
    details: "Tomato sauce, Mozzarella, Hot Italian salami, Hot chili peppers",
    imgUrl: pizzaImg21,
    options: [
      { id: 61, size: "Small", price: "18.0" },
      { id: 62, size: "Medium", price: "23.5" },
      { id: 63, size: "Large", price: "27.0" },
    ],
  },
];

export default pizzasData;
