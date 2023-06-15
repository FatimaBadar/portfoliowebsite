import React from "react";
import "./HomeComponent.css";
import Header from "../Header/Header";
import SkillsComponent from "../SkillsComponent/SkillsComponent";
import AboutComponent from "../AboutComponent/AboutComponent";
import ContactComponent from "../ContactComponent/ContactComponent";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function HomeComponent() {

    return (
        <>
            <div className='home' id="home">
                <div className="bg-image"></div>
                <Header/>

                <div className="container">
                    <div className="content">
                        <h1>Noor Fatima Qureshi</h1>
                        <h4>Final Year Student</h4>
                        <h4>FAST NUCES Karachi</h4>
                        <p className="text-center">
                        As a Computer Science student, my focus and passion revolve around web development. 
                        I have dedicated significant time and effort practicing HTML, CSS, PHP, and React. 
                        Over the past year, I have successfully completed numerous web development projects that 
                        showcase my proficiency in these technologies. I find joy in creating visually captivating user 
                        interfaces and incorporating dynamic features into my work. 
                        With a CGPA of 3.65/4.0, I take pride in my commitment to academic excellence. 
                        I am eager to apply my skills and knowledge to 
                        contribute meaningfully to the field of web development, fostering innovation and delivering impactful solutions.
                            {/* I'm a Computer Science Student who is passionate about Web Development.
                            I'm familiar with HTML, CSS, PHP and REACT
                            as I have developed my Web Development course Projects using these.
                            My current CGPA is 3.66/4.0 */}
                        </p>

                        {/* <div className="badge">
                    </div> */}
                    </div>
                </div>
            </div>
            <SkillsComponent/>  
            <AboutComponent/>       
            <ContactComponent/>
        </>
    )
}
