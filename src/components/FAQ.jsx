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
			className='shadow rounded border border-indigo-500 border-t-0 mb-6 cursor-pointer'
		>
			<div className='font-montserrat text-white p-4 text-xl relative font-medium'>
				<div className='w-5/6'>{question}</div>
				<button className='text-white text-xl absolute top-0 right-0 p-4 focus:outline-none'>
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
	<section id='faq' className='transition-transform mt-[100px] mb-[180px]'>
		<div className='flex mb-[100px] md:justify-start justify-center'>
			<h2 className={`${styles.heading2} max-w-fit`}>Ответы на вопросы</h2>
			<img src={FAQIcon} alt='icon' className='ml-[25px] w-[60px] mt-2' />
		</div>
		{faqContent.map((faqContent) => (
			<FaqCard key={faqContent.id} {...faqContent} />
		))}
	</section>
)

export default FAQ
