/*
 * File Name: Projects.jsx
 * Student Name: Ping Hei Chau
 * Student ID: 301409281
 * Date: 10/1/2024
 */

import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        <h2>Project 1</h2>
        <img src="quiz.JPG" alt="" />
        <p>This is an individual project creating interactive quizzes that are tailored to different difficulty levels.</p>
        <br />
      </div>
      <div>
        <h2>Project 2</h2>
        <img src="web.JPG" alt="" />
        <p>This is an individual project creating a simply website to store some recipes.</p>
        <br />
      </div>
      <div>
        <h2>Project 3</h2>
        <img src="listing.JPG" alt="" />
        <p>This is an individual project creating a responsive website for a realtor to show the housing listings.</p>
        <br />
      </div>
    </div>
  );
};

export default Projects;
