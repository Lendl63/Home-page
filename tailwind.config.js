/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // L'orange vif des boutons et accents
        'brand-orange': '#ea6d27',
        // Le noir profond pour les titres et la nav
        'brand-dark': '#101a24',
        // Un gris pour les paragraphes et textes secondaires
        'brand-gray': '#5c5c5c',
        // Une couleur optionnelle pour les fonds de section clairs
        'brand-light': '#f9f9f9',
      },
      fontFamily: {
        // A modifier apres verifivation de la maquette
        // 'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}