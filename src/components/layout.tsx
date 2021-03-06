import React from 'react';
import Header from './header';

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
