import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Credential from './Credential';

function App() {
  return (
   <div className='app_wrapper'>
    <Header />
    <div className='app_body'>
      <Sidebar/>
      <Feed/>
      <Credential/>
    </div>
   </div>
  );
}

export default App;
