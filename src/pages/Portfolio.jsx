import React from 'react';
import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    {
      title: "Vehicle Manager",
      text: "Manage your vehicles with ease.",
      link: "https://github.com/mdavi89/Vehicle_Manager",
    },
    {
      title: "Managed",
      text: "Keep track of your employees effortlessly.",
      link: "https://github.com/mdavi89/Managed",
    },
    {
      title: "Weather Vane",
      text: "Monitor the weather around the world.",
      link: "https://github.com/mdavi89/Weather_Vane",
    },
    {
      title: "Munii Budget App",
      text: "Balance your budget and keep track of upcoming needs.",
      link: "https://github.com/mdavi89/Project-1",
    },
  ];

  return (
    <div className="card-container">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}
