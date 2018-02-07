import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <h1>App works!</h1>
      <Switch>
        <Route path='/'></Route>
      </Switch>
    </div>
  );
}

export default App;
