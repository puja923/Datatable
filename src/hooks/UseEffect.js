import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [user, setUser] = useState("");

  //   rendering
  //  1. whenever state get change useffect is called
  // 2. [] empty bracket make useffect called only once
  //   3. [count] when state gets change useffect will re render

  useEffect(() => {
    setCalculation(calculation + 1);
    console.log("use effect called");
  }, [count]);

  useEffect(() => {
    let a = prompt("Welcome user! Enter Name: ");
    setUser(a);
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      {user && <p>Welcome {user}</p>}
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
      <p style={{ marginTop: "10px" }}>Calculation: {calculation}</p>
      <button
        onClick={() => {
          setCalculation(calculation + 1);
        }}
      >
        Calculation
      </button>
    </div>
  );
};

export default UseEffect;
