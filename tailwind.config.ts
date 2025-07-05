import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				doodle: {
					pencil: '#6B6B6B',
					paper: '#F9F6F0',
					notebook: '#E8EBF4',
					highlight: '#FFDE59',
					accent: '#FF6B6B',
					blue: '#73A1F5',
					green: '#96D6B0'
				},
				// Design style specific colors
				brutal: {
					yellow: "#FFE66D",
					red: "#FF6B6B",
					green: "#4ECDC4",
					blue: "#45B7D1",
					black: "#000000",
					white: "#FFFFFF",
				},
				bento: {
					primary: "#2E3440",
					secondary: "#D8DEE9",
					accent: "#88C0D0",
					background: "#ECEFF4",
					muted: "#E5E9F0",
				},
				apple: {
					blue: "#007AFF",
					gray: "#F2F2F7",
					green: "#30D158",
					red: "#FF3B30",
					orange: "#FF9500",
				},
				material: {
					purple: "#6200EA",
					teal: "#03DAC6",
					orange: "#FF5722",
					blue: "#1976D2",
					green: "#4CAF50",
				},
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
				handwritten: ["Gochi Hand", "Comic Sans MS", "cursive"],
				sketch: ["Pangolin", "Architects Daughter", "cursive"],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				unfold: {
					'0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
					'100%': { transform: 'scaleY(1)', transformOrigin: 'top' }
				},
				drawIn: {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'unfold': 'unfold 0.5s ease-out forwards',
				'draw-in': 'drawIn 2s forwards'
			},
			backgroundImage: {
				'paper-texture': "url('/textures/paper-texture.png')",
				'notebook-lines': "repeating-linear-gradient(#E8EBF4, #E8EBF4 31px, #C3D1E8 31px, #C3D1E8 32px)",
			},
			boxShadow: {
				brutal: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
				"brutal-hover": "2px 2px 0px 0px rgba(0, 0, 0, 1)",
				"brutal-lg": "6px 6px 0px 0px rgba(0, 0, 0, 1)",
				"brutal-xl": "8px 8px 0px 0px rgba(0, 0, 0, 1)",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
