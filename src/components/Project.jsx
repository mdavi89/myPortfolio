import React from 'react';

export default function Project({ title, text, link }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}
