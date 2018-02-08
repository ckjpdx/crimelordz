import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import FileCabinet from './FileCabinet';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style global jsx>{`
        html {
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }
        body {
          background: dimgrey;
        }
      `}</style>
      <Header />
      <FileCabinet />
    </div>
  );
}

export default App;
