import type { Config } from "tailwindcss";

const config = {
  future: {
    hoverOnlyWhenSupported: true
  },
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        // https://coolors.co/palette/e7ecef-274c77-6096ba-a3cef1-8b8c89
        lightgray: "#e7ecef",
        darkblue: "#274c77",
        midblue: "#6096ba",
        lightblue: "#a3cef1",
        clay: "#8b8c89"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries")
  ]
} satisfies Config;

export default config;
