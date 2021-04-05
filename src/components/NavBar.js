import React from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatedSocialIcon } from 'react-animated-social-icons'

const NavBar = () => {
  return (
    <header className='bg-red-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'
          >
            Ntelikatos
          </NavLink>
          <NavLink
            to='/post'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
            activeClassName='text-red-100 bg-red-700'
          >
            Blog Posts
          </NavLink>
          <NavLink
            to='/project'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
            activeClassName='text-red-100 bg-red-700'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
            activeClassName='text-red-100 bg-red-700'
          >
            About Me!
          </NavLink>
        </nav>
        <div className='inline-flex my-4'>
          <AnimatedSocialIcon
            brandName='github'
            url='https://www.google.com'
            animation='bounce'
            defaultColor='#D1D1D1'
            hoverColor='black'
            width='2em'
            animationDuration={1}
            className='mr-4'
          />
          <AnimatedSocialIcon
            brandName='twitter'
            url='https://www.google.com'
            animation='bounce'
            defaultColor='#D1D1D1'
            hoverColor='black'
            width='2em'
            animationDuration={1}
            className='mr-4'
          />
          <AnimatedSocialIcon
            brandName='facebook'
            url='https://www.google.com'
            animation='bounce'
            defaultColor='#D1D1D1'
            hoverColor='black'
            width='2em'
            animationDuration={1}
            className='mr-4'
          />
        </div>
      </div>
    </header>
  )
}

export default NavBar
