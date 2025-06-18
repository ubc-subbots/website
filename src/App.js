import React from 'react';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

function App({ customComponent: CustomComponent }) {
  return (
    <div>
      <Navbar />
      {CustomComponent && <CustomComponent />}
      <Footer />
    </div>
  );
}

export default App;
