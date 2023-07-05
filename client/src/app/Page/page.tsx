import React from 'react';
import VerticalMenu, {MenuItem} from '../../Components/VerticalMenu';

const menuItems: MenuItem[] = [
  { label: 'Inicio', link: '/' },
  { label: 'Acerca de', link: '/about' },
  { label: 'Servicios', link: '/services' },
  { label: 'Contacto', link: '/contact' },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <VerticalMenu items={menuItems} />
      {/* Aquí va el resto del contenido de tu página */}
    </div>
  );
};

export default HomePage;