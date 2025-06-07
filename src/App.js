import React from 'react';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

function App({customComponent: CustomCompoent}) {
  return (
    <div>
      <Navbar/>
      {CustomCompoent && <CustomCompoent/>}
      <Footer/>
    </div>
  );
}

export default App;
