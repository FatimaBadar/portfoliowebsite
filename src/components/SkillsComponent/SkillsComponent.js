import React from 'react'
import "./SkillsComponent.css";
import { Link } from "react-router-dom";

export default function SkillsComponent() {
    return (
        <>
            <div className="container py-5" id="skills">
                {/* <div className='container' id="skills"> */}

                <div className='row py-3'>
                    <h1 className='text-center' id='skillheading'>My Skills</h1>

                    <div className='col-md-4' >
                    <div className='details'>

                        <h4 id="col">Programming Languages</h4>
                        <ul id="col">
                            <li>C</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>REACT</li>
                        </ul>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='details'>
                        <h4 id="col">Markup Languages</h4>
                        <ul id="col">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='details'>
                        <h4 id="col">DataBase Management System</h4>
                        <ul id="col">
                            <li>MYSQL</li>
                            <li>MongoDB</li>
                        </ul>
                        </div>
                    </div>
                    {/* </div> */}
                </div>

            <div className="container pt-5">
                <div className="row">
                <h2 className="fw-normal">Projects</h2>

                    <div className="col-md-6 wow fadeInRight">
                        <ul className="timeline mt-4 pr-md-5">
                            <li>
                                <div className="title">Semester 6 - Spring 2023</div>
                                <div className="details">
                                    <h5>Restaurant Management System</h5>
                                    <small className="fg-theme">Web Programming</small>
                                    <p>Developed a comprehensive Restaurant Management System using <b>React</b> for the front-end, and 
                                        <b>PHP</b> and <b>MySQL</b> for the back-end. The system included features such as menu management, 
                                        order processing, reservation management, employee scheduling, inventory management, and customer information tracking. 
                                        The project repository can be found at the following GitHub link: <Link to="https://github.com/SabahMawani/Restaurant-management" >Restaurant Management System</Link>
                                    </p>
                                </div>
                                <div className="details">
                                    <h5>Digital Twins</h5>
                                    <small className="fg-theme">Computer Networks</small>
                                    <p>Wrote a Research Paper on how Digital Twins help ease human life.</p>
                                </div>
                                <div className="details">
                                    <h5>How do Female Computer Science Students Navigate being a Minority</h5>
                                    <small className="fg-theme">Web Programming</small>
                                    <p>Wrote a Research Paper on minority female computer science students on FAST University. 
                                        Also conducted a survey to analyzed its results.</p>
                                </div>
                            </li>

                            <li>
                                <div className="title">Semester 4 - Spring 2022</div>
                                <div className="details">
                                    <h5>Parallel Programming Comparison of Sorting Algorithms</h5>
                                    <small className="fg-theme">Operating Systems</small>
                                    <p>Compared the execution times of Heap Sort, Radix Sort, and Count Sort algorithms using Pthreads, 
                                    OpenMP, and Serial Computing techniques in a <b>Linux</b> operating system. The project aimed to 
                                    determine the most efficient approach for parallel sorting, providing insights into 
                                    performance differences among the algorithms and programming techniques.
                                </p>
                                </div>
                            </li>
                            <li>
                                <div className="title">Semester 2 - Spring 2021</div>
                                <div className="details">
                                    <h5>Hangman Game</h5>
                                    <small className="fg-theme">Object Oriented Fundamentals</small>
                                    <p>Developed a Hangman game using C++ and implemented the principles of Object-Oriented Programming. 
                                        The game offered options for 1 or 2 players. 
                                        In single-player mode, a random secret word is generated for the player to guess. 
                                        In two-player mode, one player enters the word while the other player tries to guess it. 
                                        Each incorrect guess results in the drawing of a hanging stick figure. 
                                      </p>
                                </div>
                                <div className="details">
                                    <h5>Alarm Clock</h5>
                                    <small className="fg-theme">Digital Logic Design</small>
                                    <p>Build an Arduino Uno alarm clock using an LCD display, real-time clock module, and a buzzer.
                                        Set the alarm time and wake up to a sound when it's reached.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                        <div className="col-md-6 wow fadeInRight">
                        <ul className="timeline mt-4 pr-md-5">
                            <li>
                                <div className="title">Semester 5 - Fall 2022</div>
                                <div className="details">
                                    <h5>E-commerce Fashion Store website</h5>
                                    <small className="fg-theme">Database Systems</small>
                                    <p> developed an E-commerce Fashion Store website using <b>HTML</b> and <b>CSS</b> for the front end, and <b>PHP</b> and 
                                        <b>MySQL</b> for the back end and a database system. The website included features like login, signup, 
                                        product pages, product detail pages, and an admin panel for managing the database. 
                                        It catered to two types of users: admin and regular users, providing a seamless shopping experience.</p>
                                </div>
                                <div className="details">
                                    <h5>Software Design Analysis for E-commerce Fashion Store</h5>
                                    <small className="fg-theme">Software Design and Analysis</small>
                                    <p>Created <b>UML Diagrams</b> to analyze and document the software design of the E-commerce Fashion Store website. 
                                        Some of the diagrams were class diagrams, sequence diagrams, component diagram, deployement diagram, 
                                        activity diagram, and use case diagrams. These diagrams provided a visual representation of the system's structure, 
                                        interactions, and functionality, aiding in the analysis and understanding of the software design.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div className="title">Semester 3 - Fall 2021</div>
                                <div className="details">
                                    <h5>Big Data on Movies</h5>
                                    <small className="fg-theme">Data Structures</small>
                                    <p>Implemented various data structures using <b>C++</b> to sort and search a large dataset of movies, 
                                        which was imported from Kaggle. I developed functionalities to search for specific movies, 
                                        perform advanced queries, and extract valuable insights from the dataset. It was a practical application
                                         of data structures concepts and helped me gain hands-on experience in handling large data sets efficiently.</p>
                                </div>
                                <div className="details">
                                    <h5>Library Management System</h5>
                                    <small className="fg-theme">Computer Organization and Assembly Language</small>
                                    <p>Developed LMS system using <b>Assembly Language</b> that allowed for the maintenance of a file containing library records. 
                                    User could read, write the file, enabling efficient management of books and resources.</p>
                                </div>
                         </li>                           
                            <li>
                                <div className="title">Semester 1 - Fall 2020</div>
                                <div className="details">
                                    <h5>Library Management System</h5>
                                    <small className="fg-theme">Programming Fundamentals</small>
                                    <p>Developed LMS system that allowed for the maintenance of a file containing library records. 
                                    User could read, write, and update the file, enabling efficient management of books and resources. 
                                    It was a practical application of file handling concepts in <b>C</b> and enhanced my understanding of programming fundamentals.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
