import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function StarRating(props) {

  
  const rows= [];
  for (var i = 0; i < props.max; i++) {
    let val = i;
    if (i < props.rate) {
      rows.push(<FaStar ></FaStar>);
    } else {
      rows.push(<FaRegStar></FaRegStar>);
    }
  }

  return <div>{rows}</div>;
}

export default StarRating;
