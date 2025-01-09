import React from "react";
import "./App.css";
import icon from "./assets/icon.svg";
import Price from "./components/Price";
import Likes from "./components/Likes";
import Icon from "./components/Icon";
import Uzum from "./components/Uzum";
function App() {
  const product = [
    {
      name: "Erkaklar sport to'plami, xudi shim bilan, qora",
      eskirganNarx: "3 010 000 so'm",
      price: "2 499 000 so'm",
      img: "../src/assets/div.product-card-image.png",
      yulduz: "./assets/yulduz.svg",
      kredit: "83 880 so'm/oyiga",
      comment: "4.9 (48 sharsh)",
      icon: icon,
    },
    {
      name: "Erkaklar sport to'plami, xudi shim bilan, qora",
      eskirganNarx: "3 010 000 so'm",
      price: "2 499 000 so'm",
      img: "../src/assets/div.product-card-image.png",
      yulduz: "./assets/yulduz.svg",
      kredit: "83 880 so'm/oyiga",
      comment: "4.9 (48 sharsh)",
      icon: icon,
    },
    {
      name: "Erkaklar sport to'plami, xudi shim bilan, qora",
      eskirganNarx: "3 010 000 so'm",
      price: "2 499 000 so'm",
      img: "../src/assets/div.product-card-image.png",
      yulduz: "./assets/yulduz.svg",
      kredit: "83 880 so'm/oyiga",
      comment: "4.9 (48 sharsh)",
      icon: icon,
    },
    {
      name: "Erkaklar sport to'plami, xudi shim bilan, qora",
      eskirganNarx: "3 010 000 so'm",
      price: "2 499 000 so'm",
      img: "../src/assets/div.product-card-image.png",
      yulduz: "./assets/yulduz.svg",
      kredit: "83 880 so'm/oyiga",
      comment: "4.9 (48 sharsh)",
      icon: icon,
    },
    {
      name: "Erkaklar sport to'plami, xudi shim bilan, qora",
      eskirganNarx: "3 010 000 so'm",
      price: "2 499 000 so'm",
      img: "../src/assets/div.product-card-image.png",
      yulduz: "./assets/yulduz.svg",
      kredit: "83 880 so'm/oyiga",
      comment: "4.9 (48 sharsh)",
      icon: icon,
    },
    {
      name: "Erkaklar sport to'plami, xudi shim bilan, qora",
      eskirganNarx: "3 010 000 so'm",
      price: "2 499 000 so'm",
      img: "../src/assets/div.product-card-image.png",
      yulduz: "./assets/yulduz.svg",
      kredit: "83 880 so'm/oyiga",
      comment: "4.9 (48 sharsh)",
      icon: icon,
    },
    {
      name: "Erkaklar sport to'plami, xudi shim bilan, qora",
      eskirganNarx: "3 010 000 so'm",
      price: "2 499 000 so'm",
      img: "../src/assets/div.product-card-image.png",
      yulduz: "./assets/yulduz.svg",
      kredit: "83 880 so'm/oyiga",
      comment: "4.9 (48 sharsh)",
      icon: icon,
    },
    {
      name: "Erkaklar sport to'plami, xudi shim bilan, qora",
      eskirganNarx: "3 010 000 so'm",
      price: "2 499 000 so'm",
      img: "../src/assets/div.product-card-image.png",
      yulduz: "./assets/yulduz.svg",
      kredit: "83 880 so'm/oyiga",
      comment: "4.9 (48 sharsh)",
      icon: icon,
    },
    {
      name: "Erkaklar sport to'plami, xudi shim bilan, qora",
      eskirganNarx: "3 010 000 so'm",
      price: "2 499 000 so'm",
      img: "../src/assets/div.product-card-image.png",
      yulduz: "./assets/yulduz.svg",
      kredit: "83 880 so'm/oyiga",
      comment: "4.9 (48 sharsh)",
      icon: icon,
    },
    {
      name: "Erkaklar sport to'plami, xudi shim bilan, qora",
      eskirganNarx: "3 010 000 so'm",
      price: "2 499 000 so'm",
      img: "../src/assets/div.product-card-image.png",
      yulduz: "./assets/yulduz.svg",
      kredit: "83 880 so'm/oyiga",
      comment: "4.9 (48 sharsh)",
      icon: icon,
    },
  ];
  return (
    <div
      className=" cardlar"
      style={{ width: 1250, display: "flex", flexWrap: "wrap", gap: 20 }}
    >
      {product.map((item, index) => {
        return (
          <Uzum
            key={index + 1}
            del={item.eskirganNarx}
            yulduz={item.yulduz}
            name={item.name}
            pr={item.price}
            img={item.img}
            kredit={item.kredit}
            com={item.comment}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
}
export default App;
