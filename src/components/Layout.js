import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <Navbar style={{ backgroundColor: 'darkgreen' }}>
        <Container>

          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              JK's Food Blog
            </Link>
          </Navbar.Brand>

          <Button type='button' bg="light" variant="light">
            <Link to="/add-blog" style={{ textDecoration: 'none' }}>
              New Post
            </Link>
          </Button>

        </Container>
      </Navbar>
      <br />
      <Outlet className="container"/>

    </>
  );
}

export default RootLayout;
