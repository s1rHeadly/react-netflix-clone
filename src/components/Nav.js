import React, { useEffect, useState } from 'react'

import '../css/nav.scss';

function Nav() {
   const [show, setShow] = useState(false)

   function scrollFunc(){
    if (window.scrollY > 100) {
      setShow(true)
   } else {
      setShow(false)
   }
   }

   useEffect(() => {
     window.addEventListener('scroll', scrollFunc)
     return(() => window.removeEventListener('scroll', scrollFunc))
   }, [])

   
   return (
      <div className={`nav ${show ? "nav__black" : ""}`}>
         <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
         />
         <img
            className="nav__avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Avatar"
         />
      </div>
   )


}

export default Nav