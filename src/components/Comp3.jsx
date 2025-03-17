import React, { useEffect } from "react";

const Comp3 = () => {
  useEffect(() => {
    return console.log("Компонент разобрался");
  }, []);

  useEffect(() => {
    console.log("Компонент собрался");
  }, []);
  return <div></div>;
};

export default Comp3;
