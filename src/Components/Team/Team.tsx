import React from 'react'
import './Team.scss'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

type Props = {}

function Team({}: Props) {
    return (
      <div className='team-container'>
        <h2>Team</h2>
        <p>We are the creators of this site!</p>

        <div className='team-member'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jWk_rJAOgVSZjKEvTP036Bp39z12hq80Xw&usqp=CAU' alt="Fatima Chavez" />
          <p>Fatima Chavez</p>
            <div>
                <a href="https://www.linkedin.com/in/fatima-chavez-2a4805281/"  target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/fatimachavezmoron" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
            </div>
        </div>
  
        <div className='team-member'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jWk_rJAOgVSZjKEvTP036Bp39z12hq80Xw&usqp=CAU' alt="Ornella Cópula" />
          <p>Ornella Cópula</p>
            <div>
                <a href="https://www.linkedin.com/in/ornella-c%C3%B3pula/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/ornecop" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
            </div>
        </div>
  
      </div>
    );
  }

export default Team