import React from 'react';
import './index.css';
import smileManImage from '../images/manSmile.png';

function Section1() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="section-1">
      <img
        src={smileManImage}
        alt="smileMan"
        className="mans-image"
        width="400px"
        style={{
          transform: isHovered ? 'translateY(-13px)' : 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      <div className="statement">
        <h1>Gauge Water Purifier <span className='puts'> Puts </span> <span className='an'> An </span> <span className='end'> End </span> To RO Service Pain</h1>

        <p>Fully automatic water purifier provides the highest water saving while ensuring a seamless service experience</p>

        <div className="button"><button className='take'>Take a Product Tour</button></div>

        <h3>Experience Convenience Like Never Before <br /> With Our Smart Water Purifier</h3>
      </div>
    </div>
  );
}

export default Section1;
