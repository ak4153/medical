import Carousel from 'react-elastic-carousel';
import img1 from '../assets/a.jpg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useStyles from '../utils/styles';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
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
        <CarouselWrapper res={res} breakPoints={breakPoints}>
          <Item>
            {' '}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.padVGlWkocZBXzu1H1eTewHaE8%26pid%3DApi&f=1"
              alt="img"
            />
          </Item>
          <Item>
            {' '}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chamberlain.edu%2Fmedia%2F7986%2Fnurse-strong_blog.jpg&f=1&nofb=1"
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
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.padVGlWkocZBXzu1H1eTewHaE8%26pid%3DApi&f=1"
              alt="img"
            />
          </Item>
          <Item>
            {' '}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chamberlain.edu%2Fmedia%2F7986%2Fnurse-strong_blog.jpg&f=1&nofb=1"
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
  margin-top: 20px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({ res }) => res + 75}px) {
    width: ${({ res }) => res}px;
    height: 400px;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: center;

  height: 250px;
  width: 100%;
  background-color: #00008b;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  border: 2px solid blue;

  img {
    transition: all 0.5s;
    &:hover {
      transition: 0.5s ease-in-out;
      transform: scale(1.5, 1.5);
    }
  }
  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1.5, 1.5);
    }
  }
`;
