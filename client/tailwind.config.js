import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#f59e0b",
        accent: "#10b981",
        foreground: "#ffffff",
        background: "#111827",
        "background-2": "#1f2937",
        "background-3": "#374151",
        "background-4": "#4b5563",
        "background-5": "#6b7280",
        "background-6": "#9ca3af",
        "background-7": "#d1d5db",
        "background-8": "#e5e7eb",
        "background-9": "#f3f4f6",
        "background-10": "#ffffff",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
