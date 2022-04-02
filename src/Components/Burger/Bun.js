import React from "react";

import style from "./burger.module.css";
import styled from "styled-components";

const Bun = (props) => {
  let bunClass;

  switch (props.type) {
    case "top":
      bunClass = style.bun_top;
      break;
    case "insert":
      bunClass = style.bun_insert;
      break;
    default:
      bunClass = style.bun_bottom;
      break;
  }

  return <div className={`${style.bun} ${bunClass}`}></div>;
};

export default Bun;