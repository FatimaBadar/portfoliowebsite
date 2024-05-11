import React from 'react'
import "./CertificateComponent.css";

export default function CertificateComponent() {
  return (
    <>
      <div className="bg-image2"></div>
      <div className="container py-5" id="certificate">
        <div className='row py-3' id='textportion'>
          <h1 className='text-center' id='aboutheading'>Certificates</h1>

          <div className="col-md-6 wow fadeInRight mx-auto" id='box'>
            <h5></h5>
            <ul>
              <li><b>Dean's List of Honors</b> <br/>
                <i>Fall 2020 - Fall 2022</i>
                </li><br/>
              <li><b>Honors and Certificates</b><br/>
              <i>Coders Cup 2020-2021</i>
              </li>             
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
