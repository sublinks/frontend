import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import cx from 'classnames';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import BottomNav from '@/components/bottom-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sublinks',
  description: 'Sublinks'
};

const CurvedCorner = ({ left, right }: { left?: boolean; right?: boolean; }) => (
  <>
    <div className={cx('max-md:hidden bg-primary dark:bg-primary-dark w-40 h-40 absolute -top-24', {
      '-right-24': right,
      '-left-24': left
    })}
    />
    <div className={cx('max-md:hidden bg-secondary dark:bg-secondary-dark w-40 h-40 absolute top-0 rounded-full', {
      '-right-40': right,
      '-left-40': left
    })}
    />
  </>
);

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => (
  <html lang="en">
    <body className={cx(inter.className, 'bg-secondary dark:bg-secondary-dark max-md:pb-48')}>
      <Header />
      <BottomNav />
      <main className="relative bg-primary dark:bg-primary-dark h-full l:max-w-[1352px] xl:max-w-[1524px] m-auto md:pt-24">
        <CurvedCorner left />
        <CurvedCorner right />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
