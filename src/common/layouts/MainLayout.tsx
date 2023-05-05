import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';

type MainLayoutType = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutType> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
