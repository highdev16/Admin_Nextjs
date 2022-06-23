import React from 'react';
import Head from 'next/head';

const SEO: React.FC<SEOProps> = () => (
  <Head>
    <title>Admin Panel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="description" content="Betting Admin" />
    <meta name="keywords" content="betting, admin" />
    <meta property="og:type" content="website" />
    <link rel="icon" type="image/png" href="/icons/icon-72x72.png" />
    <link rel="apple-touch-icon" type="image/png" href="/icons/icon-72x72.png" />
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" type="text/css" />
  </Head>
);

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title: string;
}

SEO.defaultProps = {
  description: 'Free admin dashboard template based on Next.Js with @paljs/ui component package',
  keywords: [
    'admin-dashboard',
    'admin',
    'react',
    'reactjs',
    'dashboard',
    'dashboard-templates',
    'themes',
    'styled-components',
    'styledcomponents',
    'admin-template',
    'free-admin-template',
    'react-admin-dashboard',
    'react-admin-panel',
    'react-admin-component',
    'nextjs',
    'react-forms',
    'react-select',
    'react-accordion',
    'react-chat',
    'react-admin-template',
  ],
};

export default SEO;
