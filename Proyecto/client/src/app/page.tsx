"use client"
import React from 'react';
import Layout from '@/Silder/Layout';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';

const page: React.FC = () => {


  return (
    <Layout>

      <div>
        <h1>Mi inicio</h1>
      </div>

    </Layout>

  );
};


export default page;