import React from 'react'
import { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<nav className='navbar flex w-full items-center justify-between pb-[0px] pt-[24px] sm:pb-10'>
			<img
				src={logo}
				alt='xtfy logo'
				className='h-[42px] w-[42px] cursor-pointer'
			/>

			<ul className='hidden flex-1 list-none items-center justify-end sm:flex'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`cursor-pointer font-montserrat text-[20px] font-normal ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						} text-white transition-all hover:scale-[1.05]`}
					>
						<a
							href={`#${nav.id}`}
							className='hover: transition-all hover:text-primary'
						>
							{nav.title}
						</a>
					</li>
				))}
			</ul>

			<div className='flex flex-1 items-center justify-end sm:z-0 sm:hidden'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='relative h-[28px] w-[28px] object-contain'
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? 'opacity-100' : 'opacity-0'
					} sidebar absolute right-0 top-20 mx-1 my-2 min-w-full rounded-xl bg-blue-900 p-6 transition-opacity`}
				>
					<ul className='flex flex-1 list-none flex-col items-center justify-end'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`cursor-pointer font-montserrat text-[16px] font-normal ${
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
