import React from 'react'
import './intro.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src='assets/headshot.jpg'></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Emily Halperin</h1>
          <h2>Software Engineer</h2>
          <h3>Ex-Product Manager & Marketer</h3>
        </div>
        <a href='#portfolio'>
          <KeyboardArrowDownIcon />
        </a>
      </div>
    </div>
  )
}
