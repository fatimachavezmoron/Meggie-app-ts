import React from 'react'
import './Contact.scss'

interface ContactProps {
  title: string;
  subtitle: string;
  url: string;
  image: string;
}

export  const Contact: React.FC<ContactProps> = ({title, subtitle, url, image}: ContactProps) => {
  return (
    <>
      <div className='titleStyle'>
      <h1>Contact Page</h1>
      </div>
      <div className='imgCont'>
        <img src={image} alt='minimalistImg' className='contactImg'/>
      </div>
      <div className='contactStyle'>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      </div>
   </>
  )
}

