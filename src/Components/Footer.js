import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
const animate = () => {
  window.scrollTo(0, 0);
};

function Footer() {
  return (
    <footer className='copyright'>
    <div className='up' id='up' onClick={animate}>
    <i className='fa fa-chevron-up'></i>
    </div>
    <p>&copy; 2023 Sumit Tiwari</p>
</footer>
  )
}

export default Footer
