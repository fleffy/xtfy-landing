import React from 'react'
import styles from '../style'
import RecommendationCard from './RecommendationCard'
import { recommendations } from '../constants'
import { reccomendationsIcon } from '../assets'

const Recommendations = () => (
	<section
		id='partners'
		className={`${styles.paddingY} relative my-[60px] flex-col`}
	>
		<div className='mb-[100px] flex justify-start'>
			<h2 className={`${styles.heading2} max-w-fit`}>Партнеры</h2>
			<img
				src={reccomendationsIcon}
				alt='icon'
				className='ml-[25px] mt-1 w-[60px]'
			/>
		</div>

		<div
			className={`recommendations-container relative z-[1] flex w-full flex-wrap justify-center`}
		>
			{recommendations.map((card) => (
				<RecommendationCard key={card.id} {...card} />
			))}
		</div>
	</section>
)

export default Recommendations
