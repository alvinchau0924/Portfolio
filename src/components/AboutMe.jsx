/*
 * File Name: AboutMe.jsx
 * Student Name: Ping Hei Chau
 * Student ID: 301409281
 * Date: 10/1/2024
 */

import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <div class="pic">
        <img src="alvin.JPG" alt="" />
      </div>
      <p>My name is Ping Hei Chau, a motivated and team-oriented student of Software Engineering Technology - Artificial Intelligence, who holds a Bachelor of Engineering degree, demonstrating a strong acumen for STEM fields. I am capable of delivering high-quality results efficiently in fast-paced, high-volume environments, and I am	multilingual in English, Cantonese, and Mandarin, enabling effective communication and collaboration</p>
      <br />
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Download My Resume
      </a>
    </div>
  );
};

export default AboutMe;
