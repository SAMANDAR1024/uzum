import shop from "../assets/shop.svg";
import Delete from "../assets/icons8-delete.svg";
import React, { useState } from "react";

function Shop({cardState, setCardState}) {
 
 

  return (
    <>
      <div
        style={{ border: "1px solid black ", borderRadius: 25, padding: 15 }}
      >
        {cardState.map((item, index) => {
          return (
            <Karzina
              setCardState={setCardState}
              cardState={cardState}
              key={index}
              rasm={item.rasm}
              name={item.name}
              narx={item.narx}
              delete={Delete}
            />
          );
        })}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <button>Tozalash</button>
          <button>Umumiy</button>
        </div>
      </div>
    </>
  );
}

function Karzina(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "start",
        gap: 18,
      }}
    >
      <img style={{ width: 60 }} src={shop} alt="" />
      <div>
        <p>{props.name}</p>
        <p>{props.narx}</p>
      </div>
      <img src={Delete} alt="" />
    </div>
  );
}

export default Shop;
