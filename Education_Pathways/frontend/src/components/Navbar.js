import React, { Component } from 'react';
import './css/navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './img/logo.png'
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CourseDescriptionPage from "./CourseDescription";
import SearchResultDisplay from './ResultDisplay'
import CourseComments from "./CourseComments";
import AboutPage from './AboutPage';
import CoursePackages from './CoursePackages';
import CourseFiltersPage from './CourseFiltersPage';

export default class NavbarComp extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: localStorage.getItem('username'),
      login: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('username') !== "") {
      this.setState({username: localStorage.getItem('username')})
    }
  }

  logOut = () => {
    localStorage.setItem('username', "");
    this.setState({username: ""})
  }

  render() {
    return (
      <Router>
        <div className='navbar-wrap'>
          <Navbar className = "navbar" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand className='nav-item header'>
              <img src={logo} alt="" />{" "}
              <Nav.Link href="/" style={{ color: "white", display: "inline", fontSize:'3vh'}}>
                Education Pathways
              </Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className='nav-item a'>
                <Nav.Link as={Link} to="/coursepackages">
                  Course Packages
                </Nav.Link>
                <Nav.Link as={Link} to="/coursefilterpage">
                  Course List
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
                {/* <Nav.Link href="/search" style={{ color: "white", display: "inline" }}>
                  Search
                </Nav.Link> */}

                

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div>
          <Switch>
          <Route path="/coursepackages">
            <CoursePackages></CoursePackages>
          </Route>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
            <Route path="/search">
              <SearchResultDisplay />
            </Route>
            <Route exact
              path="/courseComments/:code"
              render={props =>(<CourseComments {...props} />)}>
            </Route>
            <Route exact
              path="/courseDetails/:code"
              render={props =>(<CourseDescriptionPage {...props} />)}>
            </Route>
            <Route path="/coursefilterpage">
              <CourseFiltersPage></CourseFiltersPage>
            </Route>
            <Route path="/">
              <SearchResultDisplay />
            </Route>
  
          </Switch>

        </div>

      </Router>
    );
  }
}