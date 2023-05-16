/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#4155B9',
				secondary: '#00f6ff',
				dimWhite: 'rgba(255, 255, 255, 0.7)',
				dimBlue: 'rgba(9, 151, 124, 0.1)',
			},
			animation: {
				'bounce-slow': 'bounce 2s linear infinite',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			transitionDuration: {
				'1500': '1500ms',
				'2000': '2000ms',
			},
		},
		screens: {
			xxxs: '325px',
			xxs: '414px',
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [require('tailwindcss-animate')],
}
