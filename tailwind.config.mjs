/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
            boxShadow: {
                'button': `1px 1px 0 rgb(220,38,38), 
                            2px 2px 0px rgb(220,38,38),
                            3px 3px 0px rgb(220,38,38),
                            3px 3px 0px rgb(220,38,38),
                            3px 3px 0px rgb(220,38,38),
                            3px 3px 0px rgb(220,38,38)
                            `,
            },
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "100" },
				},
                fadeHalf: {
                    "0%": { opacity: "0" },
					"100%": { opacity: "50%" },
                },
                hoverIn: {
                    "0%": { transform: "translateY(50px)" },
					"100%": { transform: "translateY(0)" },
                },
                fadeHover: {
                    "0%": { opacity: "0", transform: "translateY(20px)"  },
					"100%": { opacity: "100", transform: "translateY(0)"  },
                },
                menuOpen: {
                    "0%": { width: "0", height: "0" },
                    "100%": { width: "160vw", height: "160vh" }
                }
			},
		},
	},
	plugins: [],
}
