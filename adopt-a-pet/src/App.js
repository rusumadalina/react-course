import React from 'react';
import './App.css';
import Header from './core/header/Header';
import Tile from './shared/components/tile/Tile';

function App() {
  return (
    <div>
      <Header organizationalMenuItems={['About', 'Contact']}
        petsMenuItems={['Cats', 'Dogs', 'All']}>
      </Header>
      <div className="container">
        <Tile title="Motanelul incaltat"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        </Tile>
        <Tile title="Catelul incaltat"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        </Tile>
      </div>
    </div>
  );
}

export default App;
