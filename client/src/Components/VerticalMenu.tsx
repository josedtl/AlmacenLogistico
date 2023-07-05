import React from 'react';
import Link from 'next/link';

export type MenuItem = {
  label: string;
  link: string;
};

export type VerticalMenuProps = {
  items: MenuItem[];
};

const VerticalMenu: React.FC<VerticalMenuProps> = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default VerticalMenu;