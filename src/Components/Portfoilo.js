import React from 'react'
import { AiOutlineGithub} from 'react-icons/ai';

function Portfoilo() {
  return (
    <div className='portfolio' id='portfolio'>
        <div className="container" data-aos="fade-left">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
                <div className="work">
                    <a href="#">
                    <img src="img/about1.jpg" alt="work1" />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit fugit cumque consequuntur similique sit, quae libero, facilis dolore dignissimos quaerat? In.</p>
                        <a href="#"><AiOutlineGithub className='gitIcon'/></a>
                    </div>
                    </a>
                </div>
                <div className="work">
                    <img src="" alt="work2" />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit fugit cumque consequuntur similique sit, quae libero, facilis dolore dignissimos quaerat? In.</p>
                        <a href=""><AiOutlineGithub className='gitIcon'/></a>
                    </div>
                </div>
                <div className="work">
                    <img src="" alt="work3" />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit fugit cumque consequuntur similique sit, quae libero, facilis dolore dignissimos quaerat? In.</p>
                        <a href=""><AiOutlineGithub className='gitIcon'/></a>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Portfoilo
