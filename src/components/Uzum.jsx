import Price from "./Price";
import Likes from "./Likes";
import Icon from "./Icon";
import { useState } from "react";

function Uzum({ img, name, yulduz, com, kredit, del, pr, icon }) {
  const [number, set] = useState(0);
  function Minus() {
    set((samandar) => (samandar === 0 ? 0 : samandar - 1));
  }
  return (
    <div className=" cardlar">
      <div
        style={{
          width: 232,
          borderRadius: 10,
          backgroundColor: "lightgrey",
        }}
      >
        <Likes img={img} />

        <div style={{ padding: 10 }}>
          <p style={{ textAlign: "start" }}>{name}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={yulduz} alt="" />
            <span>{com}</span>
          </div>
          <p
            style={{
              backgroundColor: "yellow",
              marginBottom: 5,
              borderRadius: 8,
              textAlign: "start",
              width: 150,
              marginTop: 15,
            }}
          >
            {kredit}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ marginTop: 15 }}>
              <del>{del}</del>
              <Price pr={pr} />
            </div>
            <Icon icon={icon} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              justifyContent: "center",
            }}
          >
           {number > 0 ? (
            <span style={{display:"flex", alignItems: "center" , gap:5}}>
                <button onClick={Minus}>-</button>
                <h2>{number}</h2>
            </span>
           ) : <span></span>}
            <button
              onClick={() => {
                set(number + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uzum;
