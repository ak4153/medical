import Layout from '../components/Layout';
import { styled } from '@mui/material/styles';
import React from 'react';

export default function Services() {
  return (
    <Layout>
      <ServiceWrapper>
        <h1>השירות</h1>
        <ul>
          <li>שימוש במכשירי החיטוי המתקדמים בשוק</li>
          <li>שימוש בחומר אנטיבקטריאלי חזק</li>
          <li>שימוש במכשיר אוזון להשמדת ריחות חזקים מהמזגן וטיהורו מחיידקים</li>
        </ul>
      </ServiceWrapper>
    </Layout>
  );
}

const ServiceWrapper = styled('div')`
  font-size: 2.5rem;
  padding: 10px;
`;
