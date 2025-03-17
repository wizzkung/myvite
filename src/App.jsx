import { useEffect, useState } from "react";
import "./App.css";
import Comp1 from "./components/comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import {
  Divide,
  Files,
  Multiply,
  MyComp,
  MyCompList2,
  MyCompList,
} from "./components/Functions";
import { Select } from "antd";
import Parent from "./components/Parent";

const App = () => {
  // const [val, setVal] = useState(0);
  // const [val2, setVal2] = useState(0);
  // const [number, setNumber] = useState(16);
  // const mul = Multiply(43, 3);
  // const div = Divide(43, 3);

  // useEffect(() => {
  //   console.log("Component created");

  //   return () => {
  //     console.log("Component unmounted");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("Component edited");
  // }, [val]);

  return (
    <>
      {/* <h1>Родительский компонент</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <Comp4 number={number} /> */}
      {/* <MyComp a={5} b={4} />
      <h1>Result: {mul}</h1>
      <h1>Result: {div}</h1>
      <select>
        {Files.map((file) => (
          <option key={file.id} value={file.id}>
            {file.name}
          </option>
        ))}
      </select> */}

      {/* <MyCompList count={10} />

      <MyCompList2></MyCompList2> */}

      <Parent></Parent>
    </>
  );
};

export default App;
