import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="input-field">
      <input {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="input-field col s12">
      <textarea className="materialize-textarea" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn waves-effect waves-light" type="submit" name="action">
      {props.children}
      <i className="material-icons right">send</i>
    </button>
  );
}
