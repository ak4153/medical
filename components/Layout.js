import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import dynamicSSR from '../utils/dynamicFunction';
export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <BoddyWrapper>{children}</BoddyWrapper>
      <Footer></Footer>
    </>
  );
}

const BoddyWrapper = styled.div`
  height: 100%;
  padding: 10px;
  padding-bottom: 240px;
`;
