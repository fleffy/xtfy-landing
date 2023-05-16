import React from 'react'
import { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<nav className='sm:pb-10 w-full flex pt-[24px] pb-[0px] justify-between items-center navbar'>
			<img
				src={logo}
				alt='xtfy logo'
				className='w-[42px] h-[42px] cursor-pointer'
			/>

			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-montserrat font-normal cursor-pointer text-[20px] ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						} text-white hover:scale-[1.05] transition-all`}
					>
						<a
							href={`#${nav.id}`}
							className='hover:text-primary transition-all hover:'
						>
							{nav.title}
						</a>
					</li>
				))}
			</ul>

			<div className='sm:z-0 sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-[28px] h-[28px] object-contain relative'
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? 'opacity-100' : 'opacity-0'
					} p-6 bg-blue-900 absolute top-20 right-0 mx-1 my-2 min-w-full rounded-xl sidebar transition-opacity`}
				>
					<ul className='list-none flex flex-col justify-end items-center flex-1'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-montserrat font-normal cursor-pointer text-[16px] ${
									index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
								} text-white`}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
