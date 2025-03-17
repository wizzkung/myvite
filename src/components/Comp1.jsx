import React from "react";

const Comp1 = ({ title = "Hello KZ", list, children }) => {
  const var1 = "Hello Step";

  return (
    <>
      {title}
      <ul>
        {list.map((z) => (
          <li>{z}</li>
        ))}
      </ul>
      {children}
    </>
  );
};

export default Comp1;
