import React from 'react';
import './App.css';

import { useSelector } from 'react-redux';
import { isMain } from './features/appSlice';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import StudentForm from './components/StudentForm';

function App() {
  const isMainComponent = useSelector(isMain);

  return (
    <div className='app'>
      <Header/>
      {isMainComponent ? <Main/> : <StudentForm/>}
      <Footer/>    
    </div>
  );
}

export default App;
