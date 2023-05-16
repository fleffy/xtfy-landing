import React from 'react'
import styles from '../style'
import RecommendationCard from './RecommendationCard'
import { recommendations } from '../constants'
import { reccomendationsIcon } from '../assets'

const Recommendations = () => (
	<section
		id='partners'
		className={`${styles.paddingY} flex-col relative my-[60px]`}
	>
		<div className='flex justify-start mb-[100px]'>
			<h2 className={`${styles.heading2} max-w-fit`}>Партнеры</h2>
			<img
				src={reccomendationsIcon}
				alt='icon'
				className='ml-[25px] w-[60px] mt-1'
			/>
		</div>

		<div
			className={`flex flex-wrap justify-center w-full recommendations-container relative z-[1]`}
		>
			{recommendations.map((card) => (
				<RecommendationCard key={card.id} {...card} />
			))}
		</div>
	</section>
)

export default Recommendations
