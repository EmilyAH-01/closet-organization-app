import React from "react";
import "./style.css";

export function Card({ src, children }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={src} alt="clothing item" />
                {/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> */}
            </div>
            {children}
        </div>
    );
}

export function CardContent({ children }) {
    return (
        <div className="card-content">
            {children}
        </div>
    );
}
