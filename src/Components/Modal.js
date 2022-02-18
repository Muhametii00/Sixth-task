import React from "react";
import "./App.css";

const Datas = [
  {
    text: "Font Color",
    color: "#444444",
  },
  {
    text: "Background Color",
    color: "#FFFFFF",
  },
  {
    text: "Button Color",
    color: "#2072EF",
  },
  {
    text: "Button Border Color",
    color: "#2073EF",
  },
  {
    text: "Button Mouseover Color",
    color: "#0053D1",
  },
];

function Modal({ closePopup }) {
  return (
    <div className="backdrop" onClick={() => closePopup(false)}>
      <div className="Modal">
        <div className="header">
          <p>Theme Color</p>
          <button className="change-theme">Change Theme</button>
        </div>
        {Datas.map((Data) => {
          const { text, color } = Data;
          return (
            <div className="content">
              <p>{text}</p>
              <div className="right-side">
                <span>{color}</span>
                <div
                  className="color-box"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            </div>
          );
        })}
        <div className="buttons">
          <button id="cancel" onClick={() => closePopup(false)}>
            Cancel
          </button>
          <button id="save">Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
