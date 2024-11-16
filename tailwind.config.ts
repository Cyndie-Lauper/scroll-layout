import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#f5f3ee",
        bg: "#0e0d0e",
        link: "#ffffff",
        "link-hover": "#ffffff",
        "bg-content": "#0e0d0e",
        "bg-frame": "#7a7364",
        border: "#46443e",
      },
      spacing: {
        "page-pad": "0.5rem",
        "grid-gap": "0.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config
