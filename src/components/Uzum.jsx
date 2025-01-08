
import Price from "./Price";
import Likes from "./Likes";
import Icon from "./Icon";
import { useState } from "react";

function Uzum(props) {
    const [number, set]=useState(0)
    function Minus() {
        set((samandar)=> (samandar===0 ? 0 : samandar -1  ))
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
          <Likes img={props.img} />
  
          <div style={{ padding: 10 }}>
            <p style={{ textAlign: "start" }}>{props.name}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={props.yulduz} alt="" />
              <span>{props.com}</span>
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
              {props.kredit}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ marginTop: 15 }}>
                <del>{props.del}</del>
                <Price pr={props.pr} />
              </div>
              <Icon icon={props.icon} />
            </div>
            <div style={{display:"flex", alignItems:"center", gap:5 , justifyContent:"center"}}>
                <button onClick={Minus} >-</button>
                <h2>{number}</h2>
                <button onClick={()=>{
                    set(number+1)
                }}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Uzum