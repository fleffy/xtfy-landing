import React from 'react'
import styles, { layout } from '../style'
import { features } from '../constants'
import { aboutUsIcon } from '../assets'

const FeatureCard = ({ icon, title, content, index }) => (
	<div
		className={`mx-5 flex flex-row items-start rounded-[20px] p-6 md:mx-0 ${
			index !== features.length - 1 ? 'mb-6' : 'mb-0'
		} feature-card transition-all hover:bg-blue-900`}
	>
		<div
			className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-[#000e22]`}
		>
			<img src={icon} alt='icon' className='h-[50%] w-[50%] object-contain' />
		</div>
		<div className='ml-3 flex flex-1 flex-col'>
			<h4 className='mb-1 font-montserrat text-[18px] font-semibold text-white'>
				{title}
			</h4>
			<p className='mb-1 min-w-fit font-montserrat text-[16px] font-normal text-dimWhite xs:min-w-[320px] ss:min-w-[480px] sm:min-w-[630px] lg:min-w-[620px]'>
				{content}
			</p>
		</div>
	</div>
)

const AboutUs = () => (
	<section id='aboutus' className={`${layout.section}`}>
		<div className={layout.sectionInfo}>
			<div className='flex'>
				<h2 className={styles.heading2}>Про нас</h2>
				<img src={aboutUsIcon} alt='icon' className='ml-[15px] mt-1 w-[60px]' />
			</div>
			<p className={`${styles.paragraph} mt-5 sm:max-w-[500px]`}>
				Более подробно о нашем проекте вы можете узнать в разделе —{' '}
				<a href='#faq' className='text-indigo-400 '>
					{' '}
					Ответы на вопросы{' '}
				</a>
			</p>
		</div>

		<div className={`${layout.sectionImg} flex-col`}>
			{features.map((feature, index) => (
				<FeatureCard key={feature.id} {...feature} index={index} />
			))}
		</div>
	</section>
)

export default AboutUs
