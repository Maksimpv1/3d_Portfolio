import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { myLogo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className= {` 
    ${ styles.paddingX } w-full flex items-center py-5 fixed top-0 z-20
    bg-primary
    `}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link 
          to="/"
          className="flex item-center gap-2 items-center"
          onClick={()=> {
            setActive("");
            window.scrollTo(0,0)
          }}
        >
          <img src={myLogo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'> Maksim &nbsp;
           <span className='sm:block hidden'>| JS Devoloper</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link,index)=>(
            <li key={index} className={ `${
              active === link.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] cursor-pointer font-medium ease-in-out duration-300`}
              onClick={ () => setActive(link.title) }
            >
              <a href={ `#${ link.id }` }>{ link.title }</a>
            </li>
          ))}
        </ul>


        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={toggle ? close : menu}
          alt="menu"
          className=" w-[28px] h-[28px] obgect-contain cursor-pointer"
          onClick={()=>setToggle(!toggle)}
          />
          <div className={` ${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute 
          top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
                    <ul className='list-none flex justify-end items-start flex-col gap-4'>
                      {navLinks.map((link,index)=>(
                        <li key={index} className={ `${
                          active === link.title ? "text-white" : "text-secondary"
                        } font-poppins font-medium cursor-pointer text-[16px]`}
                          onClick={ () => {
                            setToggle(!toggle);
                            setActive(link.title) }}
                        >
                          <a href={ `#${ link.id }` }>{ link.title }</a>
                        </li>
                      ))}
                    </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar