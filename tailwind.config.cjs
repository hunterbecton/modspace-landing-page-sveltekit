const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		maxWidth: {
			'5xl': '67rem'
		},
		extend: {
			fontFamily: {
				serif: ['Playfair Display', ...fontFamily.serif],
				sans: ['Fira Sans', ...fontFamily.sans]
			},
			colors: {
				white: {
					one: '#FBFBFB'
				},
				neutral: {
					one: '#F7FAFC',
					two: '#EDF2F7',
					three: '#E2E8F0',
					four: '#CBD5E0',
					five: '#A0AEC0',
					six: '#718096',
					seven: '#4A5568',
					eight: '#2D3748',
					nine: '#1A202C',
					ten: '#171923'
				},
				brand: {
					one: '#FFFAF0',
					two: '#FEEBC8',
					three: '#FBD38D',
					four: '#F6AD55',
					five: '#ED8936',
					six: '#DD6B20',
					seven: '#C05621',
					eight: '#9C4221',
					nine: '#7B341E',
					ten: '#652B19'
				}
			}
		}
	},
	plugins: []
};
