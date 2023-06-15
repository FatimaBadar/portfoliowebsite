import React from 'react'
import HomeComponent from "../components/HomeComponent/HomeComponent";
import Header from "../components/Header/Header";
import SkillsComponent from "../components/SkillsComponent/SkillsComponent";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <HomeComponent/>
      {/* <Header/> */}
      {/* <SkillsComponent/> */}

      {/* <Router>
        <Routes>
          <Route path="/*" element={<HomeComponent />} />
          <Route path="/#skills" element={<SkillsComponent />} />
        </Routes >
      </Router > */}
    </>
  )
}
