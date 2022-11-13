import React, { Component } from 'react';
import './css/navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './img/logo.png'
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import LogIn from "./LogIn.jsx";
import CourseDescriptionPage from "./CourseDescription";
// import Wishlist from './Wishlist';
// import SignUp from './SignUp'
import SearchResultDisplay from './ResultDisplay'
import CourseComments from "./CourseComments";
import AboutPage from './AboutPage';
import CoursePackages from './CoursePackages';

// function CourseDescription (props) {
//   let query = useQuery();
//   return <CourseDescriptionPage code={query.get("code")} />;
// }

// function useQuery() {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }


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
        <div>
          <Navbar bg="myBlue" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand>
              <img src={logo} alt="" />{" "}
              <Nav.Link href="/" style={{ color: "white", display: "inline" }}>
                Education Pathways
              </Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link as={Link} to="/coursepackages">
                  Course Packages
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
            <Route path="/">
              <SearchResultDisplay />
            </Route>

          </Switch>
        </div>
        
        
    
      </Router>
    );
  }
}
