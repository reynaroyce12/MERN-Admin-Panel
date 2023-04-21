import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'state'
import { Provider } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query';
import { render as rtlRender, screen} from '@testing-library/react'
import '@testing-library/jest-dom'


import { api } from '../state/api'
import Admins from '../components/admins'
import Dashboard from '../components/dashboard';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
})
setupListeners(store.dispatch)

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

describe('Admin', () => {
    test('rendering App component', () => {
        render(<Admins />)
        const adminElement = screen.getByText('ADMINS')
        expect(adminElement).toBeInTheDocument()
    })
})

describe('Dashboard', () => {
    test('rendering App component', () => {
        render(<Dashboard />)
        const adminElement = screen.getByText('DASHBOARD')
        expect(adminElement).toBeInTheDocument()
    })
})