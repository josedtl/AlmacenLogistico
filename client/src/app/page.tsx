"use client"
import React, { useState } from 'react';
import Sidebar from '@/Silder/Sidebar';

const SumaComponent = () => {
 
  return (
    <div className="container">
    <Sidebar />
    <div className="content">
      <h1>Contenido principal</h1>
      {/* Resto del contenido de la página */}
    </div>
  </div>
  );
};

export default SumaComponent;