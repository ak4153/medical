import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
export default function Tounge({ showTounge }) {
  return (
    <ToungeWrapper onClick={handleGoTop} showTounge={showTounge}>
      <ArrowUpwardSharpIcon className="tounge__arrow"></ArrowUpwardSharpIcon>
    </ToungeWrapper>
  );
}
function handleGoTop() {
  console.log('ss');
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // for smoothly scrolling
  });
}
const ToungeWrapper = styled.div`
  transform: ${({ showTounge }) =>
    !showTounge ? `translate(100px, -25px)` : `translate(-100px,-25px)`};
  width: 50px;
  height: 50px;
  border: 2px solid cyan;
  background-color: #b1d4e0;
  align-text: center;
  position: fixed;
  z-index: 5;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  bottom: 5px;

  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;
