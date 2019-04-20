import React, { Component } from 'react';
import Sidebar from './Components/Sidebar'
import Signin from './Components/Signin'
import './Assets/css/main.css';
import './Assets/css/responsive.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>

       <Signin />
        <Container className="minicon">
        </Container>

      </div>
    );
  }
}

export default App;
