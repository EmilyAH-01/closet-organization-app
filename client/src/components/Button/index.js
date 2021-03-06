import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function RegularBtn({ props, children }) {
  return (
    <a className="btn orange lighten-3 " {...props}>
      {children}
    </a>
  );
}

export function DeleteBtn(props) {
  return (
    <a className="btn delete-btn" {...props}>
      Remove from Closet
    </a>
  );
}


