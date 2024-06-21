import React from "react";

import "@/styles/Loader.css";

const Loader = ({ width, height, color }) => {
  return (
    <>
      <span
        style={{ width: width, height: height, borderColor: color }}
        className="loader"
      ></span>
    </>
  );
};

export default Loader;
