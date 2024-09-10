import React from "react";
import logo from './logo.svg';
import './App.css';
import {MainNavbar} from './components/Navbar';
import {VideoCard} from './components/VideoCard';
import {Sidebar} from './components/Sidebar';

import {Comments} from './components/CommentsSection';
import{Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is present in index.js or App.js


/*      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/ 

function App() {
  return (



    
    <div className="App">


      <MainNavbar/>

      <Row>
        <Col size={12} sm={8} md={10}><VideoCard/>
          <Comments/>
          
        </Col>
        <Col size={12} sm={4} md={2}><Sidebar/></Col>
        

      
      
      </Row>


    </div>







  );
}

export default App;
