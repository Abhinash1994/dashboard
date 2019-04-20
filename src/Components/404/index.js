import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error404 extends Component {
  render() {
    return (
      <div className="error404">
            <div className="text404"> 404</div>   
            <div className="sosorry"> <span className="sorry">SORRY</span>,  THE PAGE NOT FOUND</div>
            <div><Link to ="/">BACK TO HOME</Link></div>
      </div>
    );
  }
}

export default Error404;
