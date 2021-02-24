import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <a className="btn delete-btn" {...props}>
      Remove from Closet
    </a>
  );
}

export default DeleteBtn;
