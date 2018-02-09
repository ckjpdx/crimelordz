import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import FileCabinet from './FileCabinet';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <FileCabinet />
    </div>
  );
}

export default App;
