/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
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
			fraunces: ["Fraunces", "serif"],
			montserrat: ["Montserrat", "monospace"],
		},
		extend: {
			// Add custom breakpoints if needed
			screens: {
				sm: "375px",
				lg: "1440px",
			},
		},
	},
	plugins: [],
};
