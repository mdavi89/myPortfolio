import React from 'react';

export default function Project({ img, title, text, link }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..."></img>
        <div className ="card-body">
        <h5 className ="card-title">{title}</h5>
        <p className ="card-text">{text}</p>
        <a href={link} className ="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
        </a>
        </div>
    </div>
  );
}
