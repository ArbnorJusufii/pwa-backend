'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

interface IProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<IProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
