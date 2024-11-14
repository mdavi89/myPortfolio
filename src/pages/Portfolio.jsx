import React from 'react';
import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    {
      img: "https://plus.unsplash.com/premium_photo-1666739389097-4cb6f08a3077?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Weather Vane",
      text: "Monitor the weather around the world.",
      link: "https://github.com/mdavi89/Weather_Vane",
    },
    {
      img: "https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Vehicle Manager",
      text: "Manage your vehicles with ease.",
      link: "https://github.com/mdavi89/Vehicle_Manager",
    },
    {
      img: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Managed",
      text: "Keep track of your employees effortlessly.",
      link: "https://github.com/mdavi89/Managed",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1679456904325-19ca215974a7?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
