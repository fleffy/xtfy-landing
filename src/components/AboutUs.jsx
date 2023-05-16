import React from 'react'
import styles, { layout } from '../style'
import { features } from '../constants'
import { aboutUsIcon } from '../assets'

const FeatureCard = ({ icon, title, content, index }) => (
	<div
		className={`flex flex-row p-6 md:mx-0 mx-5 rounded-[20px] items-start ${
			index !== features.length - 1 ? 'mb-6' : 'mb-0'
		} hover:bg-blue-900 feature-card transition-all`}
	>
		<div
			className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#000e22]`}
		>
			<img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
		</div>
		<div className='flex-1 flex flex-col ml-3'>
			<h4 className='font-montserrat font-semibold text-white text-[18px] mb-1'>
				{title}
			</h4>
			<p className='font-montserrat font-normal text-dimWhite text-[16px] mb-1 min-w-fit lg:min-w-[620px] sm:min-w-[630px] ss:min-w-[480px] xs:min-w-[320px]'>
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
				<img src={aboutUsIcon} alt='icon' className='ml-[15px] w-[60px] mt-1' />
			</div>
			<p className={`${styles.paragraph} sm:max-w-[500px] mt-5`}>
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
