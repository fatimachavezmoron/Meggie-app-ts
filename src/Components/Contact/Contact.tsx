import React from 'react'
import './Contact.scss'
import { FaChevronRight } from 'react-icons/fa';

interface ContactProps {
  title: string;
  subtitle: string;
  url: string;
  image: string;
  rightArrow: boolean;
}

export  const Contact: React.FC<ContactProps> = ({title, subtitle, url, image, rightArrow}: ContactProps) => {
  const handleArrowClick = () => {
    if (rightArrow) {
      window.open('https://boxicons.com/?query=arr', '_blank');

    }
  };
  
  return (
    <>
      <div className='titleStyle'>
      <h1>Contact Page</h1>
      </div>
      <div className='imgCont'>
        <img src={image} alt='minimalistImg' className='contactImg'/>
      </div>
      <div className='contactStyle'>
          <a href={url} target='_black' className='contactTitle'>
          <div>
            {title}
          </div>
          </a>
          <div className='arrowCont'>
            <p>{subtitle}</p>
            {(rightArrow === true) &&  
            <FaChevronRight className="Chevron-icon" onClick={()=> handleArrowClick}/>
            }  
          </div>
      </div>
   </>
  )
}
