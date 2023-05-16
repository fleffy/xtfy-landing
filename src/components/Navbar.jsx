import React from 'react'
import { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<nav className='navbar flex w-full items-center justify-between pb-[0px] pt-[24px]'>
			<img
				src={logo}
				alt='xtfy logo'
				className='mr-8 h-[42px] w-[42px] cursor-pointer'
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
						toggle ? '' : '-translate-x-full'
					} fixed left-0 top-0 z-40 h-screen w-2/3 overflow-y-auto rounded-r-lg bg-blue-900 p-4 transition-transform`}
				>
					<ul className='mt-8 flex flex-1 list-none flex-col items-center justify-end'>
						{navLinks.map((nav, index) => (
							<li
								onClick={() => setToggle((prev) => !prev)}
								key={nav.id}
								className={`cursor-pointer font-montserrat text-xl font-normal ${
									index === navLinks.length - 1 ? 'mr-0' : 'mb-8'
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
