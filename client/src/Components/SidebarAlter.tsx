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
    label: "Inbox",
    icon: <InboxIcon />,
    path: "/Contacto",
  },
  {
    label: "Mail",
    icon: <MailIcon />,
    path: "/Contacto",
    subItems: [
      {
        label: "Subitem 1",
        icon: <InboxIcon />,
        path: "/Contacto",
      },
      {
        label: "Subitem 2",
        icon: <MailIcon />,
        path: "/Contacto",
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

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: 300,
      }}
    >
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
