import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxMenu from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Logistica",
    icon: <MailIcon />,
    path: "/Contacto",
    subItems: [
      {
        label: "Orden de Pedido",
        icon: <></>,
        path: "/OrdenPedido/Generar",
      }
    ],
  },
  {
    label: "Almacen",
    icon: <MailIcon />,
    path: "/Contacto",
    subItems: [
      {
        label: "Recepción",
        icon: <></>,
        path: "/Contacto",
      },
      {
        label: "Despacho",
        icon: <></>,
        path: "/Contacto",
      },
    ],
  }, {
    label: "Catalogo",
    icon: <MailIcon />,
    path: "/",
    subItems: [
      {
        label: "Categoria",
        icon: <></>,
        path: "/Categoria",
      },
      {
        label: "Marca",
        icon: <></>,
        path: "/Marca",
      },
      {
        label: "Modelo",
        icon: <></>,
        path: "/Modelo",
      },
      {
        label: "TipoProducto",
        icon: <></>,
        path: "/TipoProducto",
      },
       {
        label: "Producto",
        icon: <></>,
        path: "/Producto",
      },
    ],
  },
  // Agrega más elementos y subelementos del menú aquí
];

const SidebarAlter: React.FC<SidebarProps> = ({ open, onClose }) => {
  const [openSubItems, setOpenSubItems] = useState<number[]>([]);

  const handleSubItemClick = (index: number) => {
    const isSubItemOpen = openSubItems.includes(index);
    if (isSubItemOpen) {
      setOpenSubItems(openSubItems.filter((item) => item !== index));
    } else {
      setOpenSubItems([...openSubItems, index]);
    }
  };



  const handleSidebarToggle = () => {
    open = false;
    onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 400,
      }}
    >

      <Grid  >

        <Button onClick={handleSidebarToggle}

        ><InboxMenu /></Button >Sistema Logistico

      </Grid>
      <List
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.subItems ? (
              <ListItem button onClick={() => handleSubItemClick(index)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
                {openSubItems.includes(index) ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            ) : (
              <ListItem button component="a" href={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            )}
            {item.subItems && (
              <Collapse in={openSubItems.includes(index)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem key={subIndex} button component="a" href={subItem.path}>
                      <ListItemIcon>{subItem.icon}</ListItemIcon>
                      <ListItemText primary={subItem.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarAlter;
