import React from 'react'
import { AiFillFacebook,AiOutlineInstagram,AiFillLinkedin,AiOutlineGithub,AiFillPhone} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';



function Contact() {
  const sub = ()=>{
    
const scriptURL = 'https://script.google.com/macros/s/AKfycbwmFNAw_fIDvMutIEEHEMRo_r3w6_51pLtF6CQolBpvouVHOdQ3fgP4g-5_tx-Kn5UH/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector('.msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(()=>{
        msg.innerHTML = ""
      },1000)
      form.reset()
      

    })
    .catch(error => console.log("Err"))
   
})
  }
  return (

    <div>
      <div className="contact" id='contact'>
        <div className="container" data-aos="zoom-out-down">
            <div className="row">
                <div className="contact-left">
                    <h1 className='sub-title'>Contact</h1>
                    <p ><span><MdEmail className='icon-color2'/>sumittiwari2425@gmail.com</span></p>
                    <p><span><AiFillPhone className='icon-color2'/></span> 8920242595</p>
                    <div className="socal-icons">
                        <a href="https://www.facebook.com/profile.php?id=100088886859923" target="_blank"><AiFillFacebook className='icon-color'/></a>
                        <a href="https://instagram.com/shivanshu_tiwari_1?igshid=ZDdkNTZiNTM= " target="_blank"><AiOutlineInstagram className='icon-color'/></a>
                        <a href="http://www.linkedin.com/in/sumit-tiwari-009875256" target="_blank"><AiFillLinkedin className='icon-color'/></a>
                        {/* <a href="https://github.com/SumitTiwari12"><AiOutlineGithub className='icon-color'/></a> */}
                    </div>

                    <a href="https://docs.google.com/document/d/17hro7ZCGnjGT-kbs0fv1OOmNFT7JkF68_TEheKnnbLE/edit?usp=sharing" download className='btn btn2'>Download CV</a>
                </div>
                <div className="contact-right">
                    <form name='submit-to-google-sheet'>
                        <input type="text" name='Name' placeholder='Your Name' required />
                        <input type="eamil" name='Email' placeholder='Your Email' required />
                        <textarea name='Message' rows={6} placeholder='Your Message' required />
                        <button onClick={sub} type='submit' className='btn btn2'>Submit</button>
                    </form>
                    <div className='msgp'>
                        <span className='msg'></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
