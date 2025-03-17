import React, { useState } from "react";

const Comp2 = () => {
  const [counter, setCounter] = useState(0);
  const [tbVal1, setTbVal1] = useState("5");
  const [list, setList] = useState(["1", "2", "3"]);
  const [list2, setList2] = useState([]);

  const handleClick = () => {
    setCounter(counter + parseInt(tbVal1));
  };

  const handleInput = (e) => {
    setTbVal1(e.target.value);
  };
  return (
    <>
      <p>Value counter = {counter}</p>

      <p>
        <button className="btn btn-danger" onClick={handleClick}>
          Add {tbVal1}
        </button>
      </p>
      <p>
        <input
          className="input-group mb-3"
          value={tbVal1}
          onChange={handleInput}
        />
      </p>
    </>
  );
};

export default Comp2;
