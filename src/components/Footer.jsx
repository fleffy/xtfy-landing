import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { socialMedia } from '../constants'

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
			<img
				src={logo}
				alt='logo'
				className='h-[72px] object-contain cursor-pointer'
			/>
		</div>

		<div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3y45]'>
			<p className='font-montserrat font-normal text-center text-[18px] leading-[27px] text-dimWhite'>
				Copyright © 2022 xtfy. All Rights Reserved.
			</p>

			<div className='flex flex-row md:mt-0 mt-6'>
				{socialMedia.map((social, index) => (
					<a href={social.link} target='_blank'>
						<img
							key={social.id}
							src={social.icon}
							alt={social.id}
							className={`w-[21px] h-[21px] object-contain cursor-pointer ${
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
