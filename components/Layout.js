import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar></Navbar>
      <BoddyWrapper>{children}</BoddyWrapper>
      <Footer></Footer>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  min-height: 100%;
  position: relative;
`;
const BoddyWrapper = styled.div`
  height: 100%;
  padding-bottom: 170px;
`;
