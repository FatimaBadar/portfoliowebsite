import React from "react";
import "./HomeComponent.css";
import Header from "../Header/Header";
import SkillsComponent from "../SkillsComponent/SkillsComponent";
import CoursesComponent from "../CoursesComponent/CoursesComponent";
import ContactComponent from "../ContactComponent/ContactComponent";
import CertificateComponent from "../CertificateComponent/CertificateComponent";

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
                        </p>
                    </div>
                </div>
            </div>
            <SkillsComponent/>  
            <CoursesComponent/>   
            <CertificateComponent/>    
            <ContactComponent/>
        </>
    )
}
