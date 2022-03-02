import Carousel from 'react-elastic-carousel';
import img1 from '../assets/a.jpg';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import useStyles from '../utils/styles';

const breakPoints = [
  { width: 1200, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

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
          <Item>
            {' '}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.D5_kFdYeFz_wVOlBdbytPwHaFA%26pid%3DApi&f=1"
              alt="img"
            />
          </Item>
          <Item>
            {' '}
            <img
              src="https://cdn.careeronestop.org/OccVids/OccupationVideos/29-2061.00.jpg"
              alt="img"
            />
          </Item>
          <Item>
            {' '}
            <img
              src="http://www.physicaltherapistalliance.com/wp-content/uploads/2013/11/iStock_000028360432XSmall.jpg"
              alt="img"
            />
          </Item>

          <Item>
            {' '}
            <img
              src="https://cdn.careeronestop.org/OccVids/OccupationVideos/29-2061.00.jpg"
              alt="img"
            />
          </Item>
          <Item>
            {' '}
            <img
              src="https://cdn.careeronestop.org/OccVids/OccupationVideos/29-2061.00.jpg"
              alt="img"
            />
          </Item>
          <Item>
            {' '}
            <img
              src="https://cdn.careeronestop.org/OccVids/OccupationVideos/29-2061.00.jpg"
              alt="img"
            />
          </Item>
          <Item>
            {' '}
            <img
              src="https://cdn.careeronestop.org/OccVids/OccupationVideos/29-2061.00.jpg"
              alt="img"
            />
          </Item>

          <Item>
            {' '}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pelegrinamedical.com%2Fresize%2FShared%2FImages%2FProduct%2FADC-658-Adscope-Electronic-Stethoscope-Different-Colors%2Fwearing.658.jpg%3Fbw%3D1000%26w%3D1000%26bh%3D1000%26h%3D1000&f=1&nofb=1"
              alt="img"
            />
          </Item>
          <Item>
            {' '}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.D5_kFdYeFz_wVOlBdbytPwHaFA%26pid%3DApi&f=1"
              alt="img"
            />
          </Item>
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
    transition: all 0.5s;
    &:hover {
      transition: 0.5s ease-in-out;
      transform: scale(1.5, 1.5);
    }
  }
`;
