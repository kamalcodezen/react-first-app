import { useState } from "react";

export default function Event() {
  const [increment, setIncrement] = useState(0);

  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleIncrement = () => {
    setIncrement(increment + 1);
  };

  return (
    <div>
      <p>{increment}</p>

      <p>{visible === true ? null : "Hello React Learner"}</p>
      <button onClick={handleVisible}>
        {visible === false ? "Hide" : "show"}
      </button>

      <button onClick={handleIncrement}>Count + </button>

      <button
        onClick={() => setIncrement(increment - 1)}
        disabled={increment === 0}
      >
        Count -
      </button>

      <button onClick={() => setIncrement(0)}>Reset</button>
    </div>
  );
}
