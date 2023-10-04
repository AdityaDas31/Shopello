import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import test3 from '../../../images/test3.jpg';
import test4 from '../../../images/test4.jpg';
import test5 from '../../../images/test5.jpg';
import './Carousel.css'


const MyComponent = () => {
  return (
    <>
      <ScrollCarousel autoplay autoplaySpeed={1} speed={1} >
          <div className='carousel'> 
            <img src={test3} />
            <img src={test4} />
            {/* <img src={test5} /> */}
          </div>
      </ScrollCarousel>
    </>
  );
};

export default MyComponent;