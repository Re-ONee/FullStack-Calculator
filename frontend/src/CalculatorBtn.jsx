import React from "react";

function CalculatorBtn(props) {

  return (
    <input 
    type="button"
    value={props.caption}
    className={props.caption === "=" ? "calulator-equal-button" : null}
    onClick={props.onClick}
    />

  );
}

export default CalculatorBtn;