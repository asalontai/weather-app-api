/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '560': '560px',
        '519': '519px',
        '700': '700px'
      }
    },
  },
  plugins: [],
}

