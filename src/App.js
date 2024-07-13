import React from 'react';
import TaskGenerator from './TaskGenerator.js';
import FancyText from './FancyText.js';
import './App.css';

function App() {
  return(
    <div className='App'>
      <FancyText title text='Task Management and Motivation App using React'/>
      <TaskGenerator/>
      <footer>
        <p>©️ 2024 U86364709 All rights reserved</p>
      </footer>
    </div>
  )
}

export default App;
