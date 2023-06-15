import React from 'react'
import "./AboutComponent.css";

export default function AboutComponent() {
  return (
    <>
      <div className="bg-image2"></div>
      <div className="container py-5" id="about">
        <div className='row py-3' id='textportion'>
          <h1 className='text-center' id='aboutheading'>About Me</h1>

          <div className="col-md-6 wow fadeInRight mx-auto" id='box'>
            {/* <ul className="timeline mt-4 pr-md-5"> */}
              <div className="aboutdetails">
                <h5>Introduction</h5>
                <p>
                  My name is Noor Fatima Qureshi, and I am a final semester undergraduate student at FAST NUCES Karachi. I hold a current CGPA of 3.65/4.0.
                </p>

                <h5>Hobbies</h5>
                <p>During my free time, I indulge in the creative pursuit of painting. 
                  Art has been a passion of mine since my school days, and I have actively participated in numerous art competitions. 
                  To further enhance my skills, I joined an institute during my intermediate studies to refine my sketching abilities. 
                  Engaging in artistic expression provides me with a fulfilling and enjoyable outlet.</p>
                  <h5>Academic Interests</h5>
                <p>
                  I have a strong passion for web development and aspire to pursue a career in the field of full-stack web development. 
                  Over the past year, I have gained valuable experience working on various web development projects, and 
                  I have thoroughly enjoyed the process.     
                  During my last semester, I collaborated with two other group mates to develop a restaurant management system. 
                  You can find the project at this GitHub repository: Restaurant Management System

                  Besides my emphasis on web development, I have recently delved into the area of Artificial Intelligence during the previous semester. 
                  This exploration has proven to be captivating, igniting my curiosity in the expansive domain of data science.                </p>
              </div>
          </div>
        </div>
      </div>

    </>
  )
}
