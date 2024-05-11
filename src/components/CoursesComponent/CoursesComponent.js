import React from 'react'
import "./CoursesComponent.css";

export default function CoursesComponent() {
  return (
    <>
      <div className="bg-image2"></div>
      <div className="container py-5" id="courses">
        <div className='row py-3' id='textportion'>
          <h1 className='text-center' id='aboutheading'>Education and Courses</h1>

          <div className="col-md-6 wow fadeInRight mx-auto" id='box'>
            {/* <ul className="timeline mt-4 pr-md-5"> */}
              <div className="aboutdetails">
                <h5>Introduction</h5>
                <p>
                  My name is Noor Fatima Qureshi, and I am a final semester undergraduate student at FAST NUCES Karachi. I hold a current CGPA of 3.65/4.0.
                </p>

                <h5>Education</h5>
                <ul>
                  <li>Bachelor's in Computer Science <br/>
                    <b>FAST NUCES</b>  <br/>
                    <i>2020 - 2024</i>
                  </li>
                  <li>Intermediate - Pre-Engineering <br/>
                    <b>DHACSS College for Women</b>  <br/>
                    <i>2018 - 2020</i>
                  </li> 
                  <li>Matriculation - Science <br/>
                    <b> Karachi Public School</b>  <br/>
                    <i>2016 - 2018</i>
                  </li>                      
                </ul>

                <h5>Courses</h5>
                <ul>
                  <li>Web Programming</li>                  
                  <li>Information Processing Techniques</li>
                  <li>Digital Transformation: Tools and Techniques</li>
                  <li>Introduction to Cloud Computing</li>
                  <li>DevOps</li>
                  <li>Design Defects and Restructuring</li>                  
                </ul>

                {/* <h5>Academic Interests</h5>
                <p>
                  I have a strong passion for web development and aspire to pursue a career in the field of full-stack web development. 
                  Over the past year, I have gained valuable experience working on various web development projects, and 
                  I have thoroughly enjoyed the process.     
                  During my last semester, I collaborated with two other group mates to develop a restaurant management system. 
                  You can find the project at this GitHub repository: Restaurant Management System

                  Besides my emphasis on web development, I have recently delved into the area of Artificial Intelligence during the previous semester. 
                  This exploration has proven to be captivating, igniting my curiosity in the expansive domain of data science.                </p> */}
              </div>
          </div>
        </div>
      </div>

    </>
  )
}
