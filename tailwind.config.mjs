/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Arimo', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				blue: "#64b5f6",
				white: "#ffffff",
				black: "#121212",
			},
		},
	},
	plugins: [],
}
