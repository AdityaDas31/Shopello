import Carousel from 'react-bootstrap/Carousel';
import test1 from '../../../images/1.png';
import test2 from '../../../images/2.png';
import test3 from '../../../images/3.png';
import test4 from '../../../images/4.png';
import test5 from '../../../images/5.png';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function IndividualIntervalsExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img 
            className="d-block w-100"
            src={test1}
            alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className="d-block w-100"
            src={test2}
            alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className="d-block w-100"
            src={test3}
            alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className="d-block w-100"
            src={test4}
            alt="Forth slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img 
            className="d-block w-100"
            src={test5}
            alt="Fifth slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;