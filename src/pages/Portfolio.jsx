import React from 'react';
import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    {
      title: "Vehicle Manager",
      text: "Manage your vehicles with ease!",
      link: "https://github.com/mdavi89/Vehicle_Manager",
    },
    {
      title: "Task Tracker",
      text: "Keep track of your tasks effortlessly.",
      link: "https://github.com/mdavi89/Task_Tracker",
    },
    {
      title: "Expense Tracker",
      text: "Monitor your expenses and stay on budget.",
      link: "https://github.com/mdavi89/Expense_Tracker",
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}
