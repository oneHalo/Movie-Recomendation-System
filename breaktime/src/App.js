// import logo from './logo.svg';
import './App.css';

import {  HashRouter, Routes, Route } from "react-router-dom";

import { SignIn } from './pages/login/login';
import { SignUp } from './pages/signup/signUp';
import { HomePage } from './pages/homePage/homePage';
import { SearchPage } from './pages/searchPage/search.js';
import { SearchResults } from './pages/searchResults/searchResults.js';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={   <SignIn />} />
        <Route path="/signUp" element = {<SignUp /> } />
        <Route path="/homePage" element = {<HomePage />} />
        <Route path="/searchPage" element = {< SearchPage />} />
        <Route path="/searchResults" element = {< SearchResults/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
