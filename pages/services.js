import Layout from '../components/Layout';

import React from 'react';
import dynamicSSR from '../utils/dynamicFunction';
function Services() {
  return (
    <Layout>
      <h1>שירותים</h1>
    </Layout>
  );
}
export default dynamicSSR(Services);
