import React, { useEffect, useState } from 'react';
import { Grid, Link } from '@mui/material';
import useStyles from '../utils/styles';
import dynamicSSR from '../utils/dynamicFunction';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import NextLink from 'next/link';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
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
              color={'#B1D4E0'}
            >
              בית
            </Link>
          </NextLink>
        </div>
        <div className="navbar__link-container">
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              שירותים
            </Link>
          </NextLink>
        </div>
        <div className="navbar__link-container">
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              צוות מקצועי
            </Link>
          </NextLink>
        </div>
        <div className="navbar__link-container">
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              אודות
            </Link>
          </NextLink>
        </div>
        <div className="navbar__link-container">
          <NextLink href="/" passHref>
            <Link
              className={classess.linkColor}
              underline="none"
              color={'#B1D4E0'}
            >
              מודעות
            </Link>
          </NextLink>
        </div>
      </NavbarWrapper>
    </NavbarContainerWrapper>
  );
}
const NavbarContainerWrapper = styled.div`
  @media only screen and (max-width: 1920px) {
    margin: 25px;
    box-shadow: 0px 1px 25px 7px rgba(20, 93, 160, 0.88);
    border-radius: 10px;
    margin-bottom: 40px;

    .navbar__burger-container {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 25px;
    zindex: 9999;
    box-shadow: 0px 0px 0px 0px;
    border-radius: 10px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;

    .navbar__burger-container {
      display: initial;
      align-self: flex-start;
      position: absolute;
      &::after {
        text-align: center;
        font-size: 30px;
        content: '🔥';
      }
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
  @media only screen and (max-width: 1900px) {
    display: flex;

    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #145da0;
    height: 75px;
    padding: 10;
    text-align: right;

    width: 100%;
    border: 2px solid black;
    border-radius: 10px;
    color: #b1d4e0;

    font-size: 30px;
    font-weight: 800;

    &::before {
      font-size: 40px;
      content: '🔥';
    }
  }

  @media only screen and (max-width: 768px) {
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

    background-color: #145da0;
    padding: 0;
    text-align: right;
    zindex: 9999;

    border: 2px solid black;
    border-radius: 10px;
    color: #b1d4e0;
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
  }
`;
export default dynamicSSR(Navbar);
