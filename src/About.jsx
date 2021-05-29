import React from 'react'
import web from '../src/images/hero-img.png';

const About = () => {
    return (
        <div>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>स्वागतम </h1>
                        <h2 className="my-3">
                        <strong className="brand-name">About Us</strong><br/>
                         I am a <strong>Full Stack Developer</strong>,making a website
                        </h2>
                        <div className="mt-3">
                            <a href="/contact" className="btn-get-started">Contact me</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} className="img-fluid animated" alt="homeimg"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            </section>
        </div>
    )
}

export default About;
