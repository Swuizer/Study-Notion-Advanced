import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const HamburgerMenu = () => {
  return (
    <Menu right>
      <a className="menu-item" href="/">Home</a>
      <a className="menu-item" href="/about">About</a>
      <a className="menu-item" href="/catalog">catalog</a>
      <a className="menu-item" href="/contact">Contact</a>
      <a className="menu-item" href="/login"><p className='bg-richblack-700 border rounded-md p-2 translate-x-[50%] w-[50%]'>Log in</p></a>
      <a className="menu-item" href="/signup"><p className='bg-richblack-700 border rounded-md p-2 translate-x-[50%] w-[50%]'>SignUp</p></a>
    </Menu>
  );
};

export default HamburgerMenu;
