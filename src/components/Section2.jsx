import React from 'react';
import './index.css';
import manDrinks from '../images/manDrinks.png';
import checkImage from '../images/check.png';
import greenCheckImage from '../images/check2.png';

function Section2() {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="section-2">

            <div className="offers">
                <div className="button">
                    <button className='forFont cut shadow clr'>
                        <img src={checkImage} alt="check" width="13px" className='blueCheck' /> Customers' Needs Above All Else
                    </button>
                </div>


                <h1 className='knowWhy'>Take Control</h1>
                <h1 className="orange knowWhy">Monitor Usage & Change Filters</h1>

                <h1 className='knowWhy'>No Technician Needed</h1>

                <p>We have crafted a product that addresses the real frustrations of a customer. The first step is to ensure there are zero delays.</p>

                <div id="c">
                    <img src={greenCheckImage} alt="green-check" className="check" />

                    <div>
                        <h1>Smart Water Purifier With Self Servicing Capability</h1>
                        <p>Say goodbye to the hassle of scheduling a technician for purifier maintenance with self-replacing filters.</p>
                    </div>
                </div>

                <div id="d">
                    <img src={greenCheckImage} alt="green-check" className="check" />

                    <div>
                        <h1>Compensation For Service Delays</h1>
                        <p>You are entitled to a compensation of 100 Rs/Day if service is delayed for more than 24 hours.</p>
                    </div>
                </div>

                <div className="button">
                    <button className='take forFont'>Next: Smart Water Conservation</button>
                </div>
            </div>

            <img src={manDrinks} alt="drinkWater" className="man-drinks" width="450px" 
            style={{
                transform: isHovered ? 'translateY(-13px)' : 'none',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} />

        </div>
    );
}

export default Section2;
