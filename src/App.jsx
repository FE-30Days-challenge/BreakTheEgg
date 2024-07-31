import React, { useState } from "react";
import "./App.css";
import BrokenEgg from "/brokenegg.svg";
import Chicken from "/chicken.svg";
import Egg from "/egg.svg";

function App() {
  const [count, setCount] = useState(100);
  const [image, setImage] = useState(Egg);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);

      if (count <= 50 && count > 1) {
        setImage(BrokenEgg);
      } else if (count === 1) {
        setImage(Chicken);
      }

      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
  };

  return (
    <div className="container" onClick={handleClick}>
      <img
        src={image}
        className={`egg logo ${animate ? "shake" : ""}`}
        alt="Egg"
      />
      {count === 0 && (
        <div className="congratulations">Congratulations! You did it!</div>
      )}
      <p>Clicks: {count}</p>
    </div>
  );
}

export default App;
