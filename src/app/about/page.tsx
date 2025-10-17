import React from 'react';
import Header from '@/components/Header';
import Language from '@/components/Language';
const page = () => {
  return (
    <div className="h-screen">
      <div className="sticky">
        <Language />
        <Header />
      </div>
      hello about
    </div>
  );
};

export default page;
