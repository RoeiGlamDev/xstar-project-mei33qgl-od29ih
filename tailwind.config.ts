import { defineConfig } from 'tailwindcss';

/ 
 * Tailwind CSS configuration for GlamCS cosmetics brand.
 * This configuration incorporates a modern design with 
 * a focus on a luxurious aesthetic using orange and white colors.
 */

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500', // GlamCS orange
        },
        white: '#FFFFFF', // GlamCS white
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        slideIn: 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'hover', 'focus'],
      opacity: ['hover', 'focus'],
    },
  },
  plugins: [],
});