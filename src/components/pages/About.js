import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Header from '../includes/Header';
import { Navbar } from 'reactstrap';
const About = () => {
  return (
    <>
      <Header />
      <div className="divider">
        <Navbar color="light"></Navbar>
      </div>

      <div id="about" className="about-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div id="me" className="section-title">
                <h1>About Me</h1>
              </div>
            </div>
            <div className="col-md-8">
              <div className="about-info">
                <p>
                  Welcome to my portfolio page. My name is Lara Foster. I'm the
                  founder and Executive Director at Vehicle For Change, Inc.
                  where I perform a myriad of duties, including: web
                  development; marketing strategies; and project management.
                </p>
                <p>
                  As a web developer, I enjoy using my obsessive attention to
                  detail, my love for making things beautiful, and my
                  mission-driven work ethic to literally change the world.
                </p>
                <div className="row">
                  <div className="col">
                    <div className="signature">
                      <h1>Lara Foster</h1>
                    </div>
                  </div>
                  <div className="col">
                  <div className="d-flex justify-content-end">
                   <HashLink to="/skills" className="btn btn-skill mt-2 text-center">Skills <i className="fas fa-arrow-circle-right"></i> </HashLink>
                 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
