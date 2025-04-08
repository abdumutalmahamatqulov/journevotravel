import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import FrenchsidetravelPage from './travels/FrenchsidetravelPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TravelIdeas from './components/traveltypes/travelIdeas';
import 'swiper/css';
import 'swiper/css/navigation';
import FamilyTripFrance from './components/traveltypes/ideasPage/FamilyFriendlyTravel/FamilyTripFrance';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="travels" element={<FrenchsidetravelPage />} />
            <Route path='travel-ideas'element={<TravelIdeas/>}/>
            <Route path='travel-ideas/family-trip-france'element={<FamilyTripFrance/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
