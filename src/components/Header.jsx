import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
        }
      `}</style>
      <h1>Crimelordz</h1>
      <Link to='alcapone'>Home</Link>
    </div>
  );
}

export default Header;
