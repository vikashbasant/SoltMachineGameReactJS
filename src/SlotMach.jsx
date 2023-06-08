import React from "react";
import True from "./True";
import False from './False';

const SlotM = (props) => {
  //   let x = props.x;
  //   let y = props.y;
  //   let z = props.z;

  // this is nothing but object destructuring:
  let { x, y, z } = props;

  if (x === y && y === z) {
    return <True x={x} y={y} z={z} />;
  } else {
    return <False  x={x} y={y} z={z} />;
  }
};

export default SlotM;
