import { withRouter, Link } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import logo from "../assets/briefcase.png";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="nav-cont">
          <Navbar.Brand href="/">
            <img src={logo} alt="briefcase logo" className="img-fluid" />
            Search Jobs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <Link className="category-link" to="/category/business">
                  Business
                </Link>
                <Link className="category-link" to="/category/business">
                  Business
                </Link>
                <Link
                  className="category-link"
                  to="/category/customer%20Service"
                >
                  Customer Service
                </Link>
                <Link className="category-link" to="/category/data">
                  Data
                </Link>
                <Link className="category-link" to="/category/design">
                  Design
                </Link>
                <Link
                  className="category-link"
                  to="/category/Software%20Development"
                >
                  Software Development
                </Link>
                <Link className="category-link" to="/category/marketing">
                  Marketing
                </Link>
                <Link className="category-link" to="/category/sales">
                  Sales
                </Link>
                <Link
                  className="category-link"
                  to="/category/Finance%20/%20Legal"
                >
                  Finance / Legal
                </Link>
                <Link
                  className="category-link"
                  to="/category/human%20Resources"
                >
                  Human Resources
                </Link>
                <Link className="category-link" to="/category/writing">
                  Writing
                </Link>
                <Link className="category-link" to="/category/teaching">
                  Teaching
                </Link>
                <Link className="category-link" to="/category/all%20others">
                  All others
                </Link>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Link to="/profile">
              <CgProfile
                style={{ fontSize: "4vh", color: "#4F5D73" }}
                className="ml-3 profile-icon"
              />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default withRouter(NavBar);
