import React from 'react';
import Header from './header';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
