import { useState } from "react";
const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    // stop page from reloading after data submit
    e.preventDefault();
    setResult("Addition is " + (parseInt(num1) + parseInt(num2)));
  };

  return (
    <div>
      Custom Calculator
      <form onSubmit={handleSubmit}>
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
        <button>Add</button>
        <p>{result}</p>
      </form>
    </div>
  );
};

export default Calculator;
