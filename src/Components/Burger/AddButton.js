import React from "react";
import styledComponents from "styled-components";

const AddButton = (props) => {
  return (
    <button className={styledComponents.add_buton} onClick={props.clickHandler}>
      {props.label}
    </button>
  );
};

export default AddButton;
