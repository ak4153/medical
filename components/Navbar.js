import React, { useEffect, useState } from 'react';
import { Grid, Link } from '@mui/material';
import useStyles from '../utils/styles';
import dynamicSSR from '../utils/dynamicFunction';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import NextLink from 'next/link';
import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SpaIcon from '@mui/icons-material/Spa';
import EmailIcon from '@mui/icons-material/Email';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import ManIcon from '@mui/icons-material/Man';
function Navbar() {
  const [showXsNav, setShowXsNav] = useState(false);

  const classess = useStyles();

  const handleClick = () => {
    setShowXsNav((prev) => (prev = !prev));
  };

  useEffect(() => {
    console.log(showXsNav);
  }, [showXsNav]);

  return (
    <NavbarContainerWrapper>
      <div className="navbar__burger-container">
        <Button
          disableRipple
          className={!showXsNav ? 'navbar__burger' : 'navbar__burger-animate'}
          onClick={handleClick}
        >
          {!showXsNav ? (
            <MenuSharpIcon
              style={{ fontSize: '50px', color: 'white' }}
            ></MenuSharpIcon>
          ) : (
            <ArrowUpwardIcon
              style={{ fontSize: '50px', color: 'white' }}
            ></ArrowUpwardIcon>
          )}
        </Button>
      </div>

      <NavbarWrapper showXsNav={showXsNav} container>
        <div className="navbar__link-container">
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'white'}
            >
              <div className="navbar__link-container__icons">
                <HomeIcon fontSize="large" />
                <p>בית</p>
              </div>
            </Link>
          </NextLink>
        </div>
        <div className="navbar__link-container">
          <NextLink href="/services" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'white'}
            >
              <div className="navbar__link-container__icons">
                <SpaIcon fontSize="large" />
                <p>שירות</p>
              </div>
            </Link>
          </NextLink>
        </div>

        {/* <div className="navbar__link-container">
          <NextLink href="/professionalTeam" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'white'}
            >
              <div className="navbar__link-container__icons">
                <PeopleIcon fontSize="large" />
                <p>צוות מקצועי</p>
              </div>
            </Link>
          </NextLink>
        </div> */}

        {/* <div className="navbar__link-container">
          <NextLink href="/wanted" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'white'}
            >
              <div className="navbar__link-container__icons">
                <ManIcon fontSize="large" />
                <p>דרושים</p>
              </div>
            </Link>
          </NextLink>
        </div> */}

        {/* <div className="navbar__link-container">
          <NextLink href="/contact" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'white'}
            >
              <div className="navbar__link-container__icons">
                <EmailIcon fontSize="large" />
                <p>צור קשר</p>
              </div>
            </Link>
          </NextLink>
        </div>

        <div className="navbar__link-container">
          <NextLink href="/about" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'white'}
            >
              <div className="navbar__link-container__icons">
                <InfoIcon fontSize="large" />
                <p>אודות</p>
              </div>
            </Link>
          </NextLink>
        </div> */}

        <div
          className={`${classess.linkColor} navbar__link-container__icons navbar__link-container__icons-phone`}
        >
          <PhoneIcon />
          <p>052-7456683</p>
        </div>
      </NavbarWrapper>
    </NavbarContainerWrapper>
  );
}
const NavbarContainerWrapper = styled.div`
  position: relative;
  z-index: 9999;
  top: 0;
  @media only screen and (max-width: 2560px) {
    .navbar__burger-container {
      display: none;
    }
  }

  @media only screen and (max-width: 426px) {
    z-index: 9999;
    box-shadow: 0px 0px 0px 0px;

    display: flex;
    flex-direction: row;

    .navbar__burger-container {
      display: initial;
      align-self: flex-start;
      position: absolute;
    }

    .navbar__burger-animate {
      transform: rotate(180deg);
      transition: all 0.2s linear;
    }
    .navbar__burger {
      transform: rotate(360deg);
      transition: all 0.2s linear;
    }
  }
`;

const NavbarWrapper = styled.nav`

  @media only screen and (max-width: 2560px) {
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    align-items: center;
    background-color:transaparent;
    color: white;

    height: 150px;
    width: 100%;

    text-align: right;
    font-size: 60px;
    font-weight: 800;

    &::before {
      font-size: 40px;
      content: '🩺';
    }
  }

  .navbar__link-container__icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .navbar__link-container__icons-phone {
    cursor: pointer;
  }

  @media only screen and (max-width: 1440px) {
    
    height: 120px;
    width: 100%;

    text-align: right;
    font-size: 40px;
    font-weight: 800;
  }

  @media only screen and (max-width: 1024px) {
    height: 100px;
    width: 100%;

    text-align: right;
    font-size: 30px;
    font-weight: 800;
  }

  @media only screen and (max-width: 768px) {
    height: 100px;
    width: 100%;

    text-align: right;
    font-size: 25px;
    font-weight: 800;
  }

  @media only screen and (max-width: 426px) {
    &::after {
        text-align: center;
        font-size: 30px;
        content: '🩺';
      }

  ${({ showXsNav }) =>
    showXsNav
      ? ` 
      
        width: 100%;
        height: 427px;
        transition: all 0.3s ease-in;
        overflow:hidden;
        padding-right:40px;
       
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;


    background-color:transaparent;
   
    text-align: right;
    zindex: 9999;

    
 
    font-size: 30px;
    font-weight: 800;
    line-height: 1px;

    div {
      margin-right: 10px;
    }

    .navbar__link-container {
      display: inherit;
    }
    &::after {
        content: '';
      }
      &::before {
    
      content: '';
    }
    .navbar__link-container__icons-phone {
      padding: 0;
    }

    `
      : `
      display:none;
      
        transition: all 0.3s linear;
        height: 100px;
    width: 100%;

    text-align: right;
    font-size: 25px;
    font-weight: 800;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-content: flex-end;
    .navbar__link-container {
      display: none;
      margin-top: 50px;
    }
    .navbar__link-container__icons-phone {
      padding: 10px;
    }

  }
  &::before {
    content: '';
  }
    `}
  ${
    '' /* @media only screen and (max-width: 425px) {
    .navbar__link-container {
      display: none;
      margin-top: 50px;
    }

    &::before {
      content: '';
    }
    ${({ showXsNav }) =>
      showXsNav
        ? ` 
        transition: all 0.3s ease-in;
        overflow:hidden;
        display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
    width: 100%;
    height: 300px;

    background-color:transaparent;
    padding: 0;
    text-align: right;
    zindex: 9999;

    border: 2px solid black;
    border-radius: 10px;
    color: white;
    font-size: 30px;
    font-weight: 800;
    line-height: 1px;

    div {
      margin-right: 10px;
    }

    .navbar__link-container {
      display: inherit;
    }`
        : `
        transition: all 0.3s ease-in;
        display: flex;
        flex-direction:column;
        padding: 10;
    align-items: flex-start;
    line-height: 5px;
    text-align: right;


    `}
  } */
  }
`;
export default dynamicSSR(Navbar);
