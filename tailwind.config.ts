import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				gray: {
					50: '#f9fafb',
					100: '#e5e7eb',
					200: '#d1d5db',
					300: '#9ca3af',
					400: '#6b7280',
					500: '#4b5563',
					600: '#374151',
					700: '#2E2E2E',
					800: '#252525',
					900: '#1f1f1f',
				},
				white: {
					DEFAULT: '#FFFFFF',
				},
				blueGray: {
					100: '#d6e0ea',
					500: '#5A7D9A',
					600: '#4c6b82',
					700: '#3d5768',
				},
				beige: {
					100: '#fdfcf9',
					500: '#F4F1EA',
					600: '#e5e1d5',
					700: '#d3cfc3',
				},
				gold: {
					100: '#e8ddc3',
					500: '#C2B280',
					600: '#a69567',
					700: '#897a55',
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				custom: '30% 70% 70% 30% / 30% 30% 70% 70% ',
			},
			animation: {
				scrollLeft: 'scrollLeft 30s linear infinite',
			},
			keyframes: {
				scrollLeft: {
					to: {
						left: '-200px',
					},
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config
export default config
