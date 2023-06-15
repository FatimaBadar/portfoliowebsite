import React, {useState} from "react";
import "./ContactComponent.css";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

export default function ContactComponent() {
    const [value, setValue] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_mgstpvr", "template_uaavrar",
            e.target, "hLR4BVYQeqMTc8Zvx")
            .then(response => {
                console.log(response);
                setValue("Message sent successfully");
            })
            .catch(response =>{
                console.log(response)
                setValue("Couldn't send Message");
            });
    };

    return (
        <>
            <div className="bg-image3"></div>
            <div className="container py-5" id="contact">
                <div className='row py-3' id='textportion'>
                    <h1 className='text-center' id='contactheading'>Contact Me</h1>

                    <div className="row">
                        
                        <div className="col-md-6">
                            <div className="details" id="contactform">
                                <h5>My Email Address: </h5>
                                <Link to="fatimabadarq@gmail.com<">fatimabadarq@gmail.com</Link>
                            </div>
<br />
                            <div className="details" id="contactform">
                                <h5>Phone Number: </h5>
                                <p>+92-***********</p>
                            </div>
                            <br />
                        </div>

                        <div className="col-md-6">
                            <div id="contactform">
                                <form onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <input type="text" placeholder='Your Name' className="form-control" name="fname" required />
                                    </div>

                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder='Email Address' name="eemail" aria-describedby="emailHelp" required />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder='Subject' name="subject" required />
                                    </div>

                                    <div className="form-group">
                                        <textarea id="message" className="form-control" placeholder="Enter Message Here" required></textarea>
                                    </div>

                                    <div className="form-group">
                                        <input type="submit" value="Send" className="form-control" name="msg-btn" />
                                    </div>
                                </form>
                                <h5>{value}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
