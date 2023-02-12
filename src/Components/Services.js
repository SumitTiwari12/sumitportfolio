import React from 'react'
import {FaCode,FaLayerGroup} from 'react-icons/fa';
import {DiGoogleAnalytics} from 'react-icons/di';
import {CgFigma} from 'react-icons/cg';

function Services() {
  return (
    <div>
      <div className="services" id='services' data-aos="fade-left">
        <div className="container">
            <h1 className="sub-title">Services</h1>
            <div className="services-list" data-aos="fade-right">

                <div>
                    <FaLayerGroup className='sIcon'/>
                    <h2>FULL-STACK DEVELOPMENT</h2>
                    <p>I can do Full-Stack Development. I can make asthetic Websites.</p>
                </div>

                <div>
                    <FaCode className='sIcon'/>
                    <h2>SOFTWARE & APPLICATION PROGRAMMER</h2>
                    <p>I can Develope Software and create user-friendly Application.</p>
                </div>

                <div>
                   <DiGoogleAnalytics className="sIcon"/>
                    <h2>PRODUCT STRATEGY & DATA ANALYST</h2>
                    <p>I can Analyse user data and make an optimum Strategy for Product</p>
                </div>

                <div>
                   <CgFigma className="sIcon"/>
                    <h2>UI/UX Designing</h2>
                    <p>I can design Interactive user Interface </p>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
