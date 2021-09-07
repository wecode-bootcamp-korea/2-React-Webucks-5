import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login-minjaekim">
          <button>김민재</button>
        </Link>
        <Link to="/login-jaewonkim">
          <button>김재원</button>
        </Link>
        <Link to="/login-minjaelee">
          <button>이민재</button>
        </Link>
        <Link to="/login-sungjaelee">
          <button>이성재</button>
        </Link>
        <Link to="/login-wookchanglee">
          <button>이욱창</button>
        </Link>
      </div>
    );
  }
}

export default Home;
