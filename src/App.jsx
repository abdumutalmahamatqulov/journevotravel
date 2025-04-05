import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import FrenchsidetravelPage from './travels/FrenchsidetravelPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="travels" element={<FrenchsidetravelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
