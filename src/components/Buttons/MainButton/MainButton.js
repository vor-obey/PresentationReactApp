import React from "react";
import "./MainButton.sass";
import {Link} from "react-router-dom";

export const MainButton = (props) => {
  return (
    <Link to={props.onLink}>

      <button style={props.style} className="package-section-btn">
        <span>{props.iconBefore}</span>
        {props.btnName}
        <span>{props.iconAfter}</span>
      </button>

    </Link>
  )
}