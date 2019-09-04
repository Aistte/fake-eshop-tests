import React from "react";
import LoaderSpinner from "react-loader-spinner";

const loaderProps = {
  type: "Watch",
  color: "#00BFFF",
  height: "100",
  width: "100"
};

function Loader() {
  return <LoaderSpinner {...loaderProps} />;
}

export default Loader;
