import React from 'react'
import Navbar from './Navbar'

import { play, gamepad, arrowDown } from '../assets'
import styles from '../style'

const Hero = () => (
	<div>
		<div className='z-30 relative'>
			<Navbar />
		</div>

		<section className={`z-[20] relative flex md:flex-row flex-col mb-[50px]`}>
			<div className='flex flex-row justify-between items-center w-full'>
				<div>
					<h1 className='my-4 flex-1 font-montserrat font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
						Набор открыт!
					</h1>
					<p className={`${styles.paragraph} max-w-[450px] mt-5`}>
						Мы открываем набор на оплачиваемое событие в игре Sandbox
					</p>
					<a href='#aboutus'>
						<button className='min-w-[180px] min-h-[55px] bg-primary font-montserrat text-white font-bold py-2 px-4 rounded-[16px] mt-12'>
							Узнать больше
						</button>
					</a>
					<a href='#start'>
						<button className='md:w-[220px] w-[120px]  min-h-[53px] bg-transparent font-montserrat hover:bg-primary text-white font-semibold hover:text-white py-2 px-4 border-2 border-white hover:border-transparent rounded-[16px] ml-5 transition-all relative'>
							<img
								src={play}
								className='absolute pt-[5px] pl-11 md:block hidden'
							/>
							Играть
						</button>
					</a>
				</div>
			</div>
			<div className='w-[100%] h-[100%]'>
				<img
					src={gamepad}
					className='xl:block md:block hidden hover:scale-[0.97] transition-all'
				/>
			</div>

			<div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
			<div className='absolute z-[0] -left-1/2 bottom-0 w-[40%] h-[50%] rounded-full pink__gradient' />
		</section>
		<div className={`relative ${styles.flexCenter} pt-20 sm:pt-[150px] `}>
			<a href='#aboutus'>
				<img
					src={arrowDown}
					alt='arrow'
					className='cursor-pointer animate-bounce-slow'
				/>
			</a>
		</div>
	</div>
)

export default Hero
