
import type { Config } from "tailwindcss";

export default {
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
				// Nouvelle charte graphique DELINE-WIG
				'deep-black': {
					DEFAULT: '#1A1A1A',
					50: '#2D2D2D',
					100: '#262626',
					200: '#1F1F1F',
					300: '#1A1A1A',
					400: '#141414',
					500: '#0F0F0F',
					600: '#0A0A0A'
				},
				'gold': {
					50: '#FFFDF7',
					100: '#FFF8E1',
					200: '#FFF3C4',
					300: '#FFED9F',
					400: '#FFE574',
					500: '#D4AF37',
					600: '#B8941F',
					700: '#9C7A0A',
					800: '#7D6200',
					900: '#5E4900'
				},
				'nude': {
					50: '#FEFCFA',
					100: '#FDF8F4',
					200: '#F5E6DA',
					300: '#EDD4C8',
					400: '#E5C2B6',
					500: '#DDB0A4',
					600: '#D59E92'
				},
				'rose-quartz': {
					50: '#FDF2F8',
					100: '#FCE7F3',
					200: '#FBCFE8',
					300: '#F9A8D4',
					400: '#F8B8C4',
					500: '#F472B6',
					600: '#EC4899'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'gradient-flow': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'gradient-flow': 'gradient-flow 3s ease infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
				'gradient-gold-dark': 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
				'gradient-luxury': 'linear-gradient(135deg, #1A1A1A 0%, #D4AF37 50%, #1A1A1A 100%)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'great-vibes': ['Great Vibes', 'cursive'],
				'pacifico': ['Pacifico', 'cursive']
			},
			boxShadow: {
				'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
				'gold-lg': '0 10px 40px rgba(212, 175, 55, 0.4)',
				'luxury': '0 8px 32px rgba(0, 0, 0, 0.3)',
				'inset-gold': 'inset 0 2px 4px rgba(212, 175, 55, 0.2)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
