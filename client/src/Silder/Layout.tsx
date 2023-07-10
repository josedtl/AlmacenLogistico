'use client'
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';

type LayoutProps = {
  children: ReactNode;
};

const VerticalMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="flex-md-column">
      <Navbar.Toggle aria-controls="vertical-menu" />
      <Navbar.Collapse id="vertical-menu">
        <Nav className="flex-md-column">
          <Nav.Item>
            <Link href="/" passHref>Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/about" passHref>About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/contact" passHref>Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <VerticalMenu />
      <div className="container">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
