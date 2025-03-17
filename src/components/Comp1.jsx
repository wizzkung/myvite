import React from "react";

const Comp1 = ({ title = "Hello KZ", list, children }) => {
  const var1 = "Hello Step";

  return (
    <>
      {title}
      <ul>
        {list.map((z, index) => (
          <li key={index}>{z}</li>
        ))}
      </ul>
      {children}
    </>
  );
};

export default Comp1;
