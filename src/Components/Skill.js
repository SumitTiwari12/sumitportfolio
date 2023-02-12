import React from 'react'
function Skill() {

  return (
    <div className='container' data-aos="fade-left" id='skilles'>
      <div className="skills">

      <h1 className='sub-title'>Skilles</h1>
     <div className="tap-content active-tab " id='skilles'>
                <ul className='tap-flex'>
                   <div className="core">
                  <h3 >Core Skills</h3>
                  {/* <br /> */}
                  <hr />
                  <br />
                  <li><span>UI/UX(FIGMA)</span><br />Designing Web/App Interfaces <br /></li>
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
                  {/* <br /> */}
                  <hr />
                  <br />
                  <li><span>Python,C++,Java</span></li>
                  <li><span>Data Structures & Algorithms</span></li>
                  <li><span>Git/GitHub</span></li>
                   </div>
                  
                </ul>
              </div>

      </div>

    </div>
  )
}

export default Skill
