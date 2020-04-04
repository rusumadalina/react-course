import React from 'react';
import './App.css';
import Header from './core/header/Header';
import Menu from './core/menu/Menu';
import MainPage from './main-page/MainPage';

function App() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
