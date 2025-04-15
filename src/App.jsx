import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import FrenchsidetravelPage from './travels/FrenchsidetravelPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'swiper/css';
import 'swiper/css/navigation';
import FamilyTripFrance from './components/traveltypes/ideasPage/FamilyFriendlyTravel/FamilyTripFrance';
import GroupTravel from './components/traveltypes/ideasPage/GroupTravel/GroupTravel';
import HistoryCulture from './components/traveltypes/ideasPage/HistoryCulture/HistoryCulture';
import Contact from './components/about/contact/Contact';
import TravelIdeas from './components/traveltypes/TravelIdeas.jsx';
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
            <Route path='travel-ideas/group-travel'element={<GroupTravel/>}/>
            <Route path='travel-ideas/history-culture' element={<HistoryCulture/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
