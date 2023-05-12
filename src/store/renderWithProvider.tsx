import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { popupReducer } from './features/popupSlice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: any;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    store = configureStore({
      reducer: {
        popup: popupReducer,
      },
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
