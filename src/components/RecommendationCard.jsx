import React from 'react'
import { play } from '../assets'

const RecommendationCard = ({
	subs,
	name,
	title,
	img,
	videoRec,
	link,
	btnText,
}) => (
	<div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-blue-900 border-white border-2 border-opacity-5 hover:border-opacity-0 transition-all scale-100 hover:scale-105'>
		<div className='self-center'>
			<a href={link} target='_blank'>
				<img
					src={img}
					alt={name}
					className='w-[200px] h-[200px] rounded-full hover:scale-105 transition-all'
				/>
			</a>
		</div>
		<div className='flex flex-row justify-center text-center'>
			<div className='flex flex-col'>
				<h4 className='font-montserrat font-semibold text-[20px] leading-[32px] text-white mt-4'>
					{name}
				</h4>
				<p className='font-montserrat font-normal text-[16px] leading-[24px] text-dimWhite'>
					{title}
				</p>
				<p className='font-montserrat font-normal text-[18px] leading-[32px] text-white my-1'>
					{subs}
				</p>
				<a href={videoRec} target='_blank'>
					<button className='md:w-[240px] w-[170px]  min-h-[53px] bg-transparent font-montserrat text-white font-semibold py-2 px-4 border-2 hover:bg-white hover:text-primary border-white hover:border-transparent rounded-[16px] transition-all relative mt-2 hover:scale-95'>
						{btnText}
					</button>
				</a>
			</div>
		</div>
	</div>
)

export default RecommendationCard
