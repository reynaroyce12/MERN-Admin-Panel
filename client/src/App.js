import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Products from './components/Products'
import Dashboard from './components/dashboard'
import Layout from "./components/layout";
import Customers from './components/customers'

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>

            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/products' element={<Products />} />
              <Route path='/customers' element={<Customers />} />
            </Route>

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
