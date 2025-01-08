import { useState } from "react";
import imgLikes from "../assets/heart-solid.svg";
import minus from "../assets/minus.svg";
function Likes(props) {
  const [color, set] = useState("white");
  function qizil() {
    set((item) => (item === "white" ? "red" : "white"));
  }
  return (
    <div style={{ position: "relative" }}>
      <img src={props.img} alt="" />
      <img
        style={{
          width: 20,
          mixBlendMode: "multiply",
          background: color,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 18,
          position: "absolute",
          top: 11,
          right: 10.5,
        }}
        onClick={qizil}
        src={imgLikes}
        alt=""
        className="mix-blend-multiply	"
      />
    </div>
  );
}
export default Likes;
