import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import useStyles from '../utils/styles';
import img1 from '../assets/2.jpeg';
import img2 from '../assets/3.jpeg';
import img3 from '../assets/4.jpeg';
import img4 from '../assets/5.jpeg';
import img5 from '../assets/6.jpeg';
import img6 from '../assets/7.jpeg';
import img7 from '../assets/8.jpeg';

const breakPoints = [
  { width: 1200, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];
const images = [img1, img2, img3, img4, img5, img6, img7];
export default function Slideshow() {
  const [res, setRes] = useState(window.innerWidth - 75);
  const classess = useStyles();
  const handleResize = () => {
    setRes((prevState) => (prevState = window.innerWidth - 75));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="App">
        <CarouselWrapper
          transitionMs={1000}
          autoPlaySpeed={5000}
          enableAutoPlay={true}
          res={res}
          breakPoints={breakPoints}
          itemsToShow={1}
          easing="ease"
          pagination={false}
          showArrows={res < 426 ? false : true}
        >
          {images.map((img, index) => (
            <Item>
              {' '}
              <img src={img.src} alt={`image-${index}`} />
            </Item>
          ))}
        </CarouselWrapper>
      </div>
    </>
  );
}
const CarouselWrapper = styled(Carousel)`
  margin-top: 10px;
  margin-bottom: 50px;

  @media only screen and (max-width: ${({ res }) => res + 75}px) {
    width: ${({ res }) => res}px;
    height: ${({ res }) => (res < 426 ? 100 : 400)}px;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  color: transparent;
  margin: 0 15px;

  img {
    height: 70%;
    width: 70%;
    ${
      '' /* transition: all 0.5s;
    &:hover {
      transition: 0.5s ease-in-out;
      transform: scale(1.5, 1.5);
    } */
    }
  }
`;
