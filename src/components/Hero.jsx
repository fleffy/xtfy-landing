import React from 'react'
import Navbar from './Navbar'

import { play, gamepad, arrowDown } from '../assets'
import styles from '../style'

const Hero = () => (
	<div>
		<div className='relative z-30'>
			<Navbar />
		</div>

		<section className={`relative z-[20] mb-[50px] flex flex-col md:flex-row`}>
			<div className='flex w-full flex-row items-center justify-between'>
				<div>
					<h1 className='my-4 flex-1 font-montserrat text-[52px] font-semibold leading-[75px] text-white ss:text-[62px] ss:leading-[100px]'>
						Набор открыт!
					</h1>
					<p className={`${styles.paragraph} mt-5 max-w-[450px]`}>
						Мы открываем набор на оплачиваемое событие в игре Sandbox
					</p>
					<a href='#aboutus'>
						<button className='mt-12 min-h-[55px] min-w-[180px] rounded-[16px] bg-primary px-4 py-2 font-montserrat font-bold text-white'>
							Узнать больше
						</button>
					</a>
					<a href='#start'>
						<button className='relative ml-5  min-h-[53px] w-[120px] rounded-[16px] border-2 border-white bg-transparent px-4 py-2 font-montserrat font-semibold text-white transition-all hover:border-transparent hover:bg-primary hover:text-white md:w-[220px]'>
							<img
								src={play}
								className='absolute hidden pl-11 pt-[5px] md:block'
							/>
							Играть
						</button>
					</a>
				</div>
			</div>
			<div className='h-[100%] w-[100%]'>
				<img
					src={gamepad}
					className='hidden transition-all hover:scale-[0.97] md:block xl:block'
				/>
			</div>

			<div className='white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full' />
			<div className='pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[40%] rounded-full' />
		</section>
		<div className={`relative ${styles.flexCenter} pt-20 sm:pt-[150px] `}>
			<a href='#aboutus'>
				<img
					src={arrowDown}
					alt='arrow'
					className='animate-bounce-slow cursor-pointer'
				/>
			</a>
		</div>
	</div>
)

export default Hero
