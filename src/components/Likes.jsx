

import { useState } from "react";
import imgLikes from "../assets/heart-solid.svg";
import minus from "../assets/minus.svg";
function Likes({img}) {
  const [clicked, set] = useState("false");
  function handClick() {
    // set((item) => (item === imgLikes ? minus : imgLikes));
    if (clicked) {
        set(false)
    }else {
        set(true)
    }
  }
  return (
    <div style={{ position: "relative" }}>
      <img src={img} alt="" />
      <img
        style={{
          width: 20,
          mixBlendMode: "multiply",
          background: clicked,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 18,
          position: "absolute",
          top: 11,
          right: 10.5,
        }}
        onClick={handClick}
        src={clicked ?imgLikes : minus }
        alt=""
        className="mix-blend-multiply	"
      />
    </div>
  );
}
export default Likes;





























// import { useState } from "react";
// import imgLikes from "../assets/heart-solid.svg";
// import minus from "../assets/minus.svg";
// function Likes({img}) {
//   const [color, set] = useState(imgLikes);
//   function qizil() {
//     set((item) => (item === imgLikes ? minus : imgLikes));
//   }
//   return (
//     <div style={{ position: "relative" }}>
//       <img src={img} alt="" />
//       <img
//         style={{
//           width: 20,
//           mixBlendMode: "multiply",
//           background: color,
//           borderTopLeftRadius: 10,
//           borderTopRightRadius: 10,
//           borderBottomLeftRadius: 20,
//           borderBottomRightRadius: 18,
//           position: "absolute",
//           top: 11,
//           right: 10.5,
//         }}
//         onClick={qizil}
//         src={color}
//         alt=""
//         className="mix-blend-multiply	"
//       />
//     </div>
//   );
// }
// export default Likes;
