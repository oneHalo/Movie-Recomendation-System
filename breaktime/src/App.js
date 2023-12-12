// import logo from './logo.svg';
import './App.css';

import {  HashRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { SignIn } from './pages/login/login';
import { SignUp } from './pages/signup/signUp';
import { HomePage } from './pages/homePage/homePage';
import { SearchPage } from './pages/searchPage/search.js';
import { SearchResults } from './pages/searchResults/searchResults.js';
import { MovieInfo } from './pages/movieInfo/movieInfo.js';
import { ReviewPage } from './pages/review/review.js';

function App() {
  const [userID, setUserID] = useState(-1);

  // const test = localStorage.setItem("userID", -1);

  localStorage.clear();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={   <SignIn />} />
        <Route path="/signUp" element = {<SignUp /> } />
        <Route path="/homePage" element = {<HomePage />} />
        <Route path="/searchPage/:userID" element = {< SearchPage />} />
        <Route path="/searchResults/:userID" element = {< SearchResults/>} />
        <Route path="/movieInfo/:showID/:userID" element = {< MovieInfo/>} />
        <Route path="/review/:userID/:showID" element = {< ReviewPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
