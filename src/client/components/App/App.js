import React from 'react';
import Header from '../Header/Header';
import SoldProperties from '../SoldProperties/SoldProperties';
import AppCss from './App.module.css';
import Icons from '../Icons/Icons';
import './base.css';
import '../../common/style/variables.css';

function App() {
  return (
    <>
      <Icons />
      <main className={AppCss.App}>
        <Header />
        <SoldProperties />
      </main>
    </>
  );
}

export default App;
