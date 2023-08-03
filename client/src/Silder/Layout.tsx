'use client'
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import Sidebar from "@/Components/Sidebar";
import InboxMenu from "@mui/icons-material/Menu";

type LayoutProps = {
  children: ReactNode;
};

const VerticalMenu = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);


  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <div>

      <button onClick={handleSidebarToggle}><InboxMenu /></button>
      <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
    </div>
    // <Navbar bg="dark" variant="dark" expand="md" className="flex-md-column">
    //   <Navbar.Toggle aria-controls="vertical-menu" />
    //   <Navbar.Collapse id="vertical-menu">
    //     <Nav className="flex-md-column">
    //       <Nav.Item>
    //         <Link href="/" passHref>Home
    //         </Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Link href="/about" passHref>About
    //         </Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Link href="/contact" passHref>Contact
    //         </Link>
    //       </Nav.Item>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
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
