import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import { PravaPage } from './components/PravaPage';

import ProjectDetailPage from './components/ProjectDetailPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/prava" element={<PravaPage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;