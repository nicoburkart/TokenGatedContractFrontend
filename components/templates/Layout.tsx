import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Navigation } from '../organisms/Navigation';
import { Footer } from '../organisms/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Community Pass' }: Props) => (
  <div className="bg-gradient-to-br from-zinc-200 to-zinc-50">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Navigation></Navigation>

    {children}

    <Footer></Footer>
  </div>
);

export default Layout;
