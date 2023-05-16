import React from 'react'
import styles, { layout } from '../style'
import { guideIcon } from '../assets'

const Guide = () => (
	<section
		id='start'
		className={`${layout.sectionReverse} mt-[50px] mb-[50px]`}
	>
		<div
			className={`${layout.sectionImgReverse} sm:w-[720px] sm:h-[405px] xs:w-[420px] xxs:w-[365px] xxxs:w-[330px]`}
		>
			<iframe
				width='720px'
				height='405px'
				src='https://www.youtube.com/embed/Ti-LN4zickg'
				title='The Sandbox'
				allowFullScreen='1'
				className='rounded-3xl'
			></iframe>
		</div>
		<div className={`${layout.sectionInfo} text-white ml-5`}>
			<div className='flex'>
				<h2 className={`${styles.heading2} xxxs:text-[26px]`}>Ознакомление</h2>
				<img src={guideIcon} alt='icon' className='ml-[15px] w-[60px] mt-1' />
			</div>
			<p className={`${styles.paragraph} max-w-[700px] mt-5`}>
				В данном видеоролике затронуты все основные темы на которые у вас могли
				быть вопросы
			</p>
			<a
				href='https://t.me/xtfybot'
				target='_blank'
				className='min-w-[220px] min-h-[53px] bg-transparent font-montserrat hover:bg-primary text-white font-semibold hover:text-white py-3 px-4 border-2 border-white hover:border-transparent rounded-[16px] mt-10 transition-all relative text-center'
			>
				Подать заявку
			</a>
		</div>
	</section>
)

export default Guide
