import React from "react";

import Bun from "./Bun";
import Patty from "./Patty";
import Tomato from "./Tomato";
import Cheese from "./Cheese";
import Lettuce from "./Lettuce";

const Burger = () => {
  return (
    <>
      <Bun type="top" />
      <Patty />
      <Lettuce />
      <Bun type="insert" />
      <Cheese />
      <Tomato />
      <Bun />
    </>
  );
};

export default Burger;
