import React from "react";

// Exporting the Container, Row, and Col components from this file

export function Container({ children }) {
  return <div className="container">{children}</div>;
}

export function Row({ children }) {
  return <div className="row">{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div className={"col " + size}>
      {children}
    </div>
  );
}
