import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import dynamicSSR from '../utils/dynamicFunction';
export default function Layout({ children }) {
  return (
    <MainContainer>
      <Navbar></Navbar>
      <BoddyWrapper>{children}</BoddyWrapper>
      <FooterWrapper></FooterWrapper>
    </MainContainer>
  );
}

const BoddyWrapper = styled.div``;
const FooterWrapper = styled(Footer)``;
const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 225px;
  display: block;
`;
