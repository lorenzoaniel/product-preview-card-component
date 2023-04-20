/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx,vue,html}"],
	media: false, // or 'media' or 'class'
	theme: {
		colors: {
			purewhite: `#FFFFFF`,
			cream: `#F2EAE2`,
			aurometalsaurus: `#6C7289`,
			deepaquamarine: `#3D8168`,
			deepaquamarinehover: `#1A4032`,
			gunmetal: `#1C232B`,
		},
		fontFamily: {
			manrope: ["Manrope", "monospace"],
		},
		extend: {
			// Add custom breakpoints if needed
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1440px",
			},
		},
	},
	plugins: [],
};
