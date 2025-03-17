import React from "react";

const Comp4 = ({ num }) => {
  const sqrtValue = Math.sqrt(num).toFixed(2);

  return (
    <p>
      Квадратный корень числа {num} = {sqrtValue}
    </p>
  );
};

export default Comp4;
