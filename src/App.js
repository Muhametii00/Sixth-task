import React, { useState } from "react";
import Modal from "./Components/Modal";
import "./Components/App.css";

function App() {
  const [popup, setPopup] = useState(false);

  return (
    <div className="Show-popup">
      <button
        className="btn"
        onClick={() => {
          setPopup(true);
        }}
      >
        show popup
      </button>
      {popup && <Modal closePopup={setPopup} />}
    </div>
  );
}

export default App;
