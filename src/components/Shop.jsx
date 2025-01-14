import shop from "../assets/shop.svg";
import Delete from "../assets/icons8-delete.svg";
import React, { useState } from "react";

function Shop({ cardState, setCardState }) {
  function ochirish(index) {
    const newCardState = cardState.filter((_, i) => i !== index);
    setCardState(newCardState);
  }
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
              deleteBtn={
                <button onClick={() => ochirish(index)}>
                  <img src={Delete} alt="" />
                </button>
              }
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
          <button
            onClick={() => {
              setCardState([]);
            }}
          >
            Tozalash
          </button>
          <button>Umumiy {cardState.length}</button>
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
      <div>{props.deleteBtn}</div>
    </div>
  );
}

export default Shop;
