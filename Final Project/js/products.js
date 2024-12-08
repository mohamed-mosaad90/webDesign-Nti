const products = [
  {
    id: 1,
    name: "smart phone",
    type: "phone",
    price: 20.99,
    total: 20.99,
    image: "../imgs/products/1.webp",
  },
  {
    id: 2,
    name: "Sony MDRZX310W",
    type: "Headphone",
    price: 30.99,
    total: 30.99,
    image: "../imgs/products/2.webp",
  },
  {
    id: 3,
    name: "nokia phone",
    type: "phone",
    price: 15,
    total: 15,
    image: "../imgs/products/3.webp",
  },
  {
    id: 4,
    name: "apoo T8 White",
    type: "mouse",
    price: 100.99,
    total: 100.99,
    image: "../imgs/products/4.webp",
  },
  {
    id: 5,
    name: "Canon EF",
    type: "Camera",
    price: 200.99,
    total: 200.99,
    image: "../imgs/products/5.webp",
  },
  {
    id: 6,
    name: "Transcend T.Sonic",
    type: "phone",
    price: 25,
    total: 25,
    image: "../imgs/products/6.webp",
  },
  {
    id: 7,
    name: "Beoplay",
    type: "Headphone",
    price: 375,
    total: 375,
    image: "../imgs/products/7.webp",
  },
  {
    id: 8,
    name: "smart watch",
    type: "watch",
    price: 42,
    total: 42,
    image: "../imgs/products/8.webp",
  },
  {
    id: 9,
    name: "Wireless Headphone",
    type: "Headphone",
    price: 40.99,
    total: 40.99,
    image: "../imgs/products/9.webp",
  },
  {
    id: 10,
    name: "sapoo T8 Black",
    type: "mouse",
    price: 14,
    total: 14,
    image: "../imgs/products/10.webp",
  },
  {
    id: 11,
    name: "wire Headphone",
    type: "Headphone",
    price: 19.99,
    total: 19.99,
    image: "../imgs/products/11.webp",
  },
  {
    id: 12,
    name: "Luna Smartphone",
    type: "phone",
    price: 8,
    total: 8,
    image: "../imgs/products/12.webp",
  },
  {
    id: 13,
    name: "smart watch",
    type: "watch",
    price: 48,
    total: 48,
    image: "../imgs/products/13.webp",
  },
  {
    id: 14,
    name: "PlayStation",
    type: "gaming",
    price: 5000,
    total: 5000,
    image: "../imgs/products/14.webp",
  },
  {
    id: 15,
    name: "Control shield",
    type: "gaming",
    price: 1000,
    total: 1000,
    image: "../imgs/products/15.webp",
  },
  {
    id: 16,
    name: "Huawei MediaPad",
    type: "tablet",
    price: 208.99,
    total: 208.99,
    image: "../imgs/products/16.webp",
  },
];


localStorage.setItem("products", JSON.stringify(products))
let check=localStorage.getItem("products")

