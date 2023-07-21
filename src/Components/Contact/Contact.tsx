import React from 'react'
import './Contact.scss'


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
            <img alt='arrowImg' 
            color='#ff7300' 
            className='arrowImg' 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAXJJREFUaEPtlzFOw0AQRd8qp4FDIK6QijSkIbQIYTfQQ0OMaClAFJAGDoG4A9wGBhkZyZDIyWpnFq00br07O+//GXs2UPgTCs8fB/hvB90BdyBRAS+hRAGTt7sDyRImBnAHVgkoNbthzkuiuBttV3dAai4RKoRZuOJuoywSFqkCSM0pwkWXj+SAUAOQY7YY8b4kZmAW5twmiDy4VQ2gPUVqDhFu4NeUK8B+aHi0gFAF+IY4YUrg/g/EJzC1gFAHyA1hApATwgyg64kJwmJFOe2FhmeNnjAFGID4ACYaEOYA1hBZAHoQD8CoVzrJTuQEGCM8FQkgNW0zq6vfOmnuQJe82ZfIFGAgebW/shlArpHCBCBX8iY9kDN5dYCix2mp2AbeluYb4cDyaqnaA1JxBpwXeaX8UV4qroGjHPdh9R7oQeyEhleNcXldDNUSWneYxXsHsFA1JqY7EKOWxVp3wELVmJjuQIxaFmvdAQtVY2IW78AXIbuBMfUWvnUAAAAASUVORK5CYII="
            onClick={handleArrowClick}
            /> 
            }  
          </div>
      </div>
   </>
  )
}
