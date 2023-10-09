// Sidebar.tsx
"use client"
import React from "react";
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
import Link from "next/link"; // Importar el componente Link de Next.js
import InboxMenu from "@mui/icons-material/Menu";
import Button from '@mui/material/Button';
interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path?: string; // Agregamos la propiedad 'path' para almacenar la ruta de la página
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Inbox",
    icon: <InboxIcon />,
    path: "/Contacto", // Ruta de la página inbox.tsx
  },
  {
    label: "Inbox",
    icon: <InboxIcon />,
    path: "/Contacto", // Ruta de la página inbox.tsx
  },
  {
    label: "Mail",
    icon: <MailIcon />,
    path: "/Contacto", // Ruta de la página mail.tsx
    subItems: [
      {
        label: "Subitem 1",
        icon: <InboxIcon />,
        path: "/Contacto", // Ruta de la página subitem1.tsx (si existe)
      },
      {
        label: "Subitem 2",
        icon: <MailIcon />,
        path: "/Contacto", // Ruta de la página subitem2.tsx (si existe)
      },
    ],
  },
  // Agrega más elementos y subelementos del menú aquí
];

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const [openSubItems, setOpenSubItems] = React.useState<number[]>([]);

  const handleSubItemClick = (index: number) => {
    const isSubItemOpen = openSubItems.includes(index);
    if (isSubItemOpen) {
      setOpenSubItems(openSubItems.filter((item) => item !== index));
    } else {
      setOpenSubItems([...openSubItems, index]);
    }
  };

  return (


    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 300, // Establecer el ancho deseado aquí (300 píxeles en este caso)
      }}
    >

      <Button ><InboxMenu /></Button>
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.subItems ? (
              <ListItem button onClick={() => handleSubItemClick(index)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
                {openSubItems.includes(index) ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            ) : (
              <Link href={`${item.path}`} passHref> {/* Utilizar el componente Link para el enlace */}
                <ListItem button  >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              </Link>
            )}
            {item.subItems && (
              <Collapse in={openSubItems.includes(index)} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <Link key={subIndex} href={`${item.path}`} passHref> {/* Utilizar el componente Link para los subelementos */}
                      <ListItem >
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText primary={subItem.label} />
                      </ListItem>
                    </Link>
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

export default Sidebar;
