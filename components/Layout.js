import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import XsNavbar from './XsNavbar';
import styled from 'styled-components';
import Navbarnew from './Navbarnew';

export default function Layout({ children }) {
  return (
    <div>
      <Navbarnew></Navbarnew>
      {children}
      <Footer></Footer>
    </div>
  );
}
