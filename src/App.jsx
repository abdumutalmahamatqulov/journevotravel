import React, { useEffect, useRef, useState } from 'react';
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
import TravelIdeas from './components/travelideas/TravelIdeas';
import { languages } from './data/detail';
import AboutUs from './components/about/about/AboutUs';
import FAQ from './components/about/faq/FAQ';
import ScrollToTop from './components/ScrollToTop';
import FamilyTripToMonaco from './components/traveltypes/tours/FamilyTripToMonaco';
function App() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const current = languages.find((lang) => lang.code === selectedLang);

  const handleChange = (code) => {
    setSelectedLang(code);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Provider store={store}>
      <div className="fixed z-10 left-6 bottom-6 bg-white/90 p-2 rounded shadow " ref={dropdownRef}>
        <div className="relative inline-block text-left w-28">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 cursor-pointer w-full"
            >
              <img src={current?.flag} alt={current?.code} className="w-5 h-5" />
              <span>{current.shortLabel}</span>
              <svg
                className="w-4 h-4 ml-1 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <ul className="absolute bottom-full left-0 mb-2 bg-white border rounded shadow min-w-full">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className="px-3 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                    onClick={() => handleChange(lang.code)}
                  >
                    <img src={lang.flag} alt={lang.code} className="w-5 h-5" />
                    <span>{lang.name}</span>
                  </li>
                ))}
              </ul>
            )}
        </div>
      </div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="travels" element={<FrenchsidetravelPage />} />
            <Route path='travel-ideas' element={<TravelIdeas />} />
            <Route path='travel-ideas/family-trip-france' element={<FamilyTripFrance />} />
            <Route path='tours/a-family-trip-to-monaco' element={<FamilyTripToMonaco />} />
            <Route path='travel-ideas/group-travel' element={<GroupTravel />} />
            <Route path='travel-ideas/history-culture' element={<HistoryCulture />} />
            <Route path='about' element={<AboutUs />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
