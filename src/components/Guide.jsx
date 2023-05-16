import React from 'react'
import styles, { layout } from '../style'
import { guideIcon } from '../assets'

const Guide = () => (
	<section
		id='start'
		className={`${layout.sectionReverse} mb-[50px] mt-[50px]`}
	>
		<div
			className={`${layout.sectionImgReverse} animate-in fade-in-5 slide-in-from-left-6 duration-2000 xxxs:w-[330px] xxs:w-[365px] xs:w-[420px] sm:h-[405px] sm:w-[720px] md:pt-10`}
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
		<div
			className={`${layout.sectionInfo} ml-5 text-white animate-in fade-in-5 slide-in-from-right-6 duration-2000`}
		>
			<div className='max-w-auto flex gap-3'>
				<h2 className={`${styles.heading2}`}>Обучение</h2>
				<img src={guideIcon} alt='icon' className='mt-1 w-[60px]' />
			</div>
			<p className={`${styles.paragraph} mt-5 max-w-[700px]`}>
				В данном видеоролике затронуты все основные темы на которые у вас могли
				быть вопросы
			</p>
			<a
				href='https://t.me/xtfybot'
				target='_blank'
				className='relative mt-10 min-h-[53px] min-w-[220px] rounded-[16px] border-2 border-white bg-transparent px-4 py-3 text-center font-montserrat font-semibold text-white transition-all hover:border-transparent hover:bg-primary hover:text-white'
			>
				Подать заявку
			</a>
		</div>
	</section>
)

export default Guide
