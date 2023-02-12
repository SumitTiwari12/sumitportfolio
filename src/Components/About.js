import React from 'react'

function About() {

  return (
    <div className='about' id='about'>
      <div className="container">
        <div className="row">
          <div className="about-col-1"  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="300">
            <img src="img/about1.jpg" alt="imgabout" />
          </div>
          <div className="about-col-2">
            <h1 className='sub-title' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="350">About</h1>
            <p data-aos="fade-left">Hi, I'm Sumit Tiwari. A passionate Full Stack Developer | Software Developer from India and pursuing my Bachelor's of Science
              Degree from Saraswati Vidya Mandir Science & Technology College, Uttar Pradesh.also

              <div className="tap-content" id='education'>
                <ul>
                <li><span>UI/UX Design Training of Internshala</span><br />July 2022 – September 2022</li>
                </ul>
              </div>
              
              I'm looking to Collaborate on any PROJECT which solves any real-life problem.</p>
              <a href="https://drive.google.com/file/d/1-ZixYVpFPr44vZ7ZmcWiUhRs39nrypA4/view?usp=share_link" className='btn' download>UI/UX Certifiacte</a>

              {/* <div className="tab-titles" data-aos="fade-right">
                <p className='tab-links active-link'>Skilles</p>
                <p className='tab-links'>Exprience</p>
                <p className='tab-links'>Education</p>
              </div> */}
              {/* <div className="tap-content active-tab" id='skilles'>
                <ul className='tap-flex'>
                   <div className="core">
                  <h3 >Core Skills</h3>
                  <br />
                  <hr />
                  <br />
                  <li><span>UI/UX(FIGMA)</span><br />Designing Web/App Interfaces</li>
                  <li><span>Full Stack Web Development</span><br />
                  Web App Developement
                  <ol>
                    <li>HTML,CSS,JS</li>
                    <li>React.JS,Next.js</li>
                    <li>NodeJS,& Express</li>
                    <li>MongoDB</li>
                    <li>Tailwind,BootStrap</li>
                  </ol>
                  </li>
                   </div>
                   <br />
                   <div className="additional">
                  <h3>Additional Skills</h3>
                  <br />
                  <hr />
                  <br />
                  <li><span>Python,C++,Java</span></li>
                  <li><span>Data Structures & Algorithms</span></li>
                  <li><span>Git/GitHub</span></li>
                   </div>
                  
                </ul>
              </div> */}

              {/* <div className="tap-content" id='exprience'>
                <ul>
                <li><span>Frasher</span></li>
                </ul>
              </div> */}


              {/* <div className="tap-content" id='education'>
                <ul> */}
                {/* <li><span>Ram Anjor Mishra Intermediate College ,Uttar Pradesh</span><br />12th (2020-2021)</li> */}
                {/* <li><span>Saraswati Vidya Mandir Science & Technology College, Uttar Pradesh</span><br />B.S.C (2021-2023)</li> */}
                {/* <li><span>UI/UX Design Training of Internshala</span><br />July 2022 – September 2022</li> */}
                {/* </ul> */}
              {/* </div> */}

              
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
