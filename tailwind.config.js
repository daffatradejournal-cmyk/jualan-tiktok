/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Space Grotesk"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
          950: '#031726',
        },
        wa: {
          light: '#ecfdf5',
          DEFAULT: '#25D366',
          hover: '#1eb956',
          dark: '#059669',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#090d16',
        }
      },
      boxShadow: {
        'haptic': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'soft-card': '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05), 0 14px 28px -4px rgba(15, 23, 42, 0.06)',
        'soft-hover': '0 20px 32px -8px rgba(15, 23, 42, 0.12), 0 6px 12px -4px rgba(15, 23, 42, 0.06)',
        'modal': '0 25px 60px -15px rgba(15, 23, 42, 0.35)',
        'glow-emerald': '0 0 28px -4px rgba(16, 185, 129, 0.35)',
        'glow-sky': '0 0 28px -4px rgba(56, 189, 248, 0.35)',
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
