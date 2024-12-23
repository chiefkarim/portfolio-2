import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        "rightSlideIn": {
          from: {
            opacity: "0",
            "transform-style": "preserve-3d",
            "transform-origin": "right",
            transform: "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)  rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
          },
          to: {
            opacity: "1",
            "transform-style": "preserve-3d",
            "transform-origin": "right",
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)  rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
          }
        }
      },
      animation: {
        "right-slide-in": "rightSlideIn  1s forwards "
      }
    },
  },


  customProperties: {
    transformStyle: {
      preserve3d: 'preserve-3d',
    },
  },
  plugins: [require('tailwindcss-3d')],
}
export default config
