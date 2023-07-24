import React from 'react'
import './About.scss'

interface AboutProps {
  title: string;
  url: string;
  image: string;
}

export const About: React.FC<AboutProps> = ({title, url, image}: AboutProps) => {
  return (
    <>
    <div className='aboutCont'>
    <div className='titleStyle'>
      <h1>About Page</h1>
    </div>
      <div>
        <img src={image}
        alt='AboutImg'
        className='aboutImg'
        />
        <a href={url} target='_black' className='aboutTitle'>
          <div>
            {title}
          </div>
        </a>
      </div>
    </div>
    </>
  )
}

