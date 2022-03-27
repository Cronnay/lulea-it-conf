import React from 'react';
import './src/styles/global.css';
import Layout from './src/components/layout';

const wrapPageElement = ({
  element,
  props,
}: {
  element: JSX.Element;
  props: any;
}): JSX.Element => {
  return <Layout {...props}>{element}</Layout>;
};

export { wrapPageElement };
