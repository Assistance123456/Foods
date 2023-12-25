import Carousel from 'react-bootstrap/Carousel';

function Sliderss() {
  return (
 <>
 <div className='Sliderss'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1220299848/photo/mini-beef-sliders-served-with-cheese-and-beetroot.jpg?s=2048x2048&w=is&k=20&c=vSDQpFd5VVftnm7j46VffisUXF67TlJMsJOa9YMAhos="
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1407604871/photo/gourmet-bacon-cheeseburger-with-french-fries.jpg?s=2048x2048&w=is&k=20&c=agA8hsKL_3m2K4hdaeTUZjjvD60PFYv9wrw3dMofbXI="
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1283601368/photo/mini-cheeseburgers-with-fries.jpg?s=2048x2048&w=is&k=20&c=9SUfoL48xjrMELe49PGOqORrFQ8Wcmvv8DJ520NcFTI="
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default Sliderss;