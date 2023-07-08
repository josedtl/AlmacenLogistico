"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <button className="toggle-button" onClick={handleToggle}>
                {isExpanded ? 'Contraer' : 'Expandir'}
            </button>
            <ul className="menu">
                <li className="menu-item">
                    <Link href="/OrdenPedido">Orden de Pedido </Link>
                </li>
                <li className="menu-item">
                    <Link href="/orden-de-pedido">
                    </Link>
                </li>
                <li className="menu-item">
                    <a
                        className="dropdown-toggle"
                        data-bs-toggle="collapse"
                        href="#catalogosSubMenu"
                        role="button"
                        aria-expanded="false"
                        aria-controls="catalogosSubMenu"
                    >
                        Catálogos
                    </a>
                    <ul className="submenu collapse" id="catalogosSubMenu">
                        <li className="submenu-item">
                            <Link href="/dashboard" replace>
                                Dashboard
                            </Link>
                        </li>
                        <li className="submenu-item">
                            <Link href="/dashboard" replace>
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;