import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { socialMedia } from '../constants'

const Footer = () => (
	<section
		className={`${styles.flexCenter} ${styles.paddingY} flex-col animate-in fade-in-5 slide-in-from-bottom-6 duration-1500`}
	>
		<div className={`${styles.flexCenter} mb-8 w-full flex-col md:flex-row`}>
			<img
				src={logo}
				alt='logo'
				className='h-[72px] cursor-pointer object-contain'
			/>
		</div>

		<div className='flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3f3y45] pt-6 md:flex-row'>
			<p className='text-center font-montserrat text-[18px] font-normal leading-[27px] text-dimWhite'>
				Copyright © 2022 - 2023 xtfy. All Rights Reserved.
			</p>

			<div className='mt-6 flex flex-row md:mt-0'>
				{socialMedia.map((social, index) => (
					<a href={social.link} target='_blank' key={index}>
						<img
							key={social.id}
							src={social.icon}
							alt={social.id}
							className={`h-[21px] w-[21px] cursor-pointer object-contain ${
								index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
							}`}
						/>
					</a>
				))}
			</div>
		</div>
	</section>
)

export default Footer
