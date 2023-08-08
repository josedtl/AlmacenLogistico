'use client'
import React, { ReactNode } from 'react';
import InboxMenu from "@mui/icons-material/Menu";
import SidebarAlter from "@/Components/SidebarAlter";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
type LayoutProps = {
  children: ReactNode;
};

const VerticalMenu = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);


  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const ItemLeft = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#000000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
  const ItemRight = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#000000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
  }));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#000000',
        margin:theme.spacing(-1),
    ...theme.typography.body2,
    position:'relative',
  }));


  return (
    <Item>

      <Grid container >

        <Grid item xs={6}>

          <ItemLeft>
            <Button onClick={handleSidebarToggle}><InboxMenu /></Button>
            <SidebarAlter open={sidebarOpen} onClose={handleSidebarToggle} />
          </ItemLeft>

        </Grid>
        <Grid item xs={6}>
          <ItemRight>
         
          </ItemRight>
        </Grid>

      </Grid>
    </Item>
    // <div style="background-color: black; color: white;" >


    // </div>


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
