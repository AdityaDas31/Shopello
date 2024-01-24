import Carousel from 'react-bootstrap/Carousel';
// import test1 from '../../../images/1.png';
// import test2 from '../../../images/2.png';
// import test3 from '../../../images/3.png';
// import test4 from '../../../images/4.png';
// import test5 from '../../../images/5.png';
import Carouselimg from '../../../Carouselimg';
import './Carousel.css';


function IndividualIntervalsExample() {
  // const imageSources = [test1, test2, test3, test4, test5];

  return (
    <Carousel data-bs-theme="dark" className='carousel'>
      {Carouselimg.map((src, index) => (
        <Carousel.Item key={index}>
          <img 
            className="d-block w-100"
            src={src}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default IndividualIntervalsExample;