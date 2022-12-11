import { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  // function add
  const Add = () => {
    console.log("Add");
    setResult("Addition is " + (parseInt(num1) + parseInt(num2)));
  };

  const Sub = () => {
    console.log("Sub");
    setResult("Substraction is " + (parseInt(num1) - parseInt(num2)));
  };
  const Multi = () => {
    console.log("Multi");
    setResult("Multiplication is " + parseInt(num1) * parseInt(num2));
  };
  const Div = () => {
    console.log("Div");
    setResult("Division is " + parseInt(num1) / parseInt(num2));
  };

  return (
    <div className="Calculator">
      <h3>Custom Calculator</h3>
      <hr />
      <p>
        Num1:{" "}
        <input
          type="text"
          id="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </p>
      <p>
        Num2:{" "}
        <input
          type="text"
          id="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </p>
      <button onClick={Add}>Add</button>
      <button onClick={Sub}>Sub</button>
      <button onClick={Multi}>Multi</button>
      <button onClick={Div}>Div</button>
      <p>{result}</p>
    </div>
  );
};

export default Calculator;
