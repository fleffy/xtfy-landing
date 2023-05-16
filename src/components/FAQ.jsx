import { React, useState } from 'react'
import styles from '../style'
import { faqContent } from '../constants'
import { FAQIcon } from '../assets'
import { FAQclose, FAQopen } from '../assets'

const FaqCard = ({ question, answer }) => {
	const [expand, setExpand] = useState(false)
	const expandClass = expand ? 'block' : 'hidden'
	const answerClass = `${expandClass} p-4`

	return (
		<div
			onClick={() => setExpand(!expand)}
			className='mb-6 cursor-pointer rounded border border-t-0 border-indigo-500 shadow'
		>
			<div className='relative p-4 font-montserrat text-xl font-medium text-white'>
				<div className='w-5/6'>{question}</div>
				<button className='absolute right-0 top-0 p-4 text-xl text-white focus:outline-none'>
					{expand ? (
						<img src={FAQclose} alt='icon' />
					) : (
						<img src={FAQopen} alt='icon' />
					)}
				</button>
			</div>
			<p
				className={`${answerClass} ${styles.paragraph} text-[15px] text-white`}
			>
				{answer}
			</p>
		</div>
	)
}

const FAQ = () => (
	<section id='faq' className='mb-[180px] mt-[100px] transition-transform'>
		<div className='mb-[100px] flex justify-center md:justify-start'>
			<h2 className={`${styles.heading2} max-w-fit`}>Ответы на вопросы</h2>
			<img src={FAQIcon} alt='icon' className='ml-[25px] mt-2 w-[60px]' />
		</div>
		{faqContent.map((faqContent) => (
			<FaqCard key={faqContent.id} {...faqContent} />
		))}
	</section>
)

export default FAQ
