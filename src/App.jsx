import React from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import ScrollButton from './ScrollButton'

function App() {
  return (
    <React.Fragment>
      <div className="app">

        <Sidebar />

        <Feed />

        <Widget />
        <ScrollButton />

      </div>
      
    </React.Fragment>


  );
}

export default App;
