import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Crimelordz</h1>
      <Link to='alcapone'>Home</Link>
    </div>
  );
}

export default Header;
