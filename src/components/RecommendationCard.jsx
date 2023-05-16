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
	<div className='my-5 mr-0 flex max-w-[370px] scale-100 flex-col justify-between rounded-[20px] border-2 border-white border-opacity-5 px-10 py-12 transition-all hover:scale-105 hover:border-opacity-0 hover:bg-blue-900 sm:mr-5 md:mr-10'>
		<div className='self-center'>
			<a href={link} target='_blank'>
				<img
					src={img}
					alt={name}
					className='h-[200px] w-[200px] rounded-full transition-all hover:scale-105'
				/>
			</a>
		</div>
		<div className='flex flex-row justify-center text-center'>
			<div className='flex flex-col'>
				<h4 className='mt-4 font-montserrat text-[20px] font-semibold leading-[32px] text-white'>
					{name}
				</h4>
				<p className='font-montserrat text-[16px] font-normal leading-[24px] text-dimWhite'>
					{title}
				</p>
				<p className='my-1 font-montserrat text-[18px] font-normal leading-[32px] text-white'>
					{subs}
				</p>
				<a href={videoRec} target='_blank'>
					<button className='relative mt-2  min-h-[53px] w-[170px] rounded-[16px] border-2 border-white bg-transparent px-4 py-2 font-montserrat font-semibold text-white transition-all hover:scale-95 hover:border-transparent hover:bg-white hover:text-primary md:w-[240px]'>
						{btnText}
					</button>
				</a>
			</div>
		</div>
	</div>
)

export default RecommendationCard
