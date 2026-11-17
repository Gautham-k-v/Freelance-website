/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080810",
        panel: "#11101B",
        brand: "#782EFF",
        lilac: "#A78BFA",
        mute: "#A1A1AA",
      },
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        site: "1180px",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(120, 46, 255, 0.32)",
      },
    },
  },
  plugins: [],
}
