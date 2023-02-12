import React from 'react'
import { AiOutlineClose} from 'react-icons/ai';
import { HiMenuAlt1} from 'react-icons/hi';

const Closemenu = ()=>{
  let sidemenu = document.querySelector("#Sidmenu")
  sidemenu.style.right = "-250px"
  console.log("click")
}

const Openumenu = ()=>{
  let sidemenu = document.querySelector("#Sidmenu")
  console.log(sidemenu)
  sidemenu.style.right = "0px"
  console.log("click2")
}

const close = ()=>{
  let a = document.getElementsByClassName("ikclick")
  console.log(a)
  Array.from(a).forEach((e)=>{
    Closemenu()
    // Openumenu()
  })
}

close()
function Navbar() {


  return (
    <>

    <div className='container' id='nav' >
      <nav>
        <a href="#" className='logo'>P.<b>F</b>olio</a>
        <ul  id='Sidmenu'>
          <li><a href="#header" className='ikclick' onClick={close}>Home</a></li>
          <li><a href="#about" className='ikclick' onClick={close}>About</a></li>
          <li><a href="#skilles" className='ikclick' onClick={close}>Skilles</a></li>
          <li><a href="#services" className='ikclick' onClick={close}>Services</a></li>
          <li><a href="#portfolio" className='ikclick' onClick={close}>Portfolio</a></li>
          <li><a href="#contact" className='ikclick' onClick={close}>Contact</a></li>
          <AiOutlineClose className='menu-icon-close fas' onClick={Closemenu}/>
          </ul>
          <HiMenuAlt1 className='menu-icon-open fas' onClick={Openumenu}/>
      </nav>
    </div>
    </>
  )
}

export default Navbar
