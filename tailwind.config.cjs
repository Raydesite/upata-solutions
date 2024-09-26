/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				body: 'rgb(var(--color-bg))',
				'box-bg': 'rgb(var(--color-box))',
				'box-shadow': 'rgb(var(--box-sd))',
				'box-border': 'rgb(var(--box-border))',
				primary: '#00237D',
				'heading-1': 'rgb(var(--heading-1))',
				'heading-2': 'rgb(var(--heading-2))',
				'heading-3': 'rgb(var(--heading-3))',
				second: '#008033',
				instagram: '#e1306c',
				raydesite: '#fcb21a',
			},
			screens: {
				midmd: '880px',
			},
		},
	},
	plugins: [require('daisyui')],
};
