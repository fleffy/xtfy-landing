import React from 'react'
import styles from './style'
import {
	Hero,
	AboutUs,
	Guide,
	Recommendations,
	FAQ,
	Footer,
} from './components'

const App = () => (
	<div>
		<div>
			<div
				className={`${styles.paddingX} ${styles.flexCenter} ${styles.padding} bg-[#030317]`}
			>
				<div className={`${styles.boxWidth}`}>
					<Hero />
					<AboutUs />
					<Guide />
					<Recommendations />
					<FAQ />
					<Footer />
				</div>
			</div>
		</div>
	</div>
)

export default App
