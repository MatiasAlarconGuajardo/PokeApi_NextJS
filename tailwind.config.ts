import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "fondo": "#f4f4fc",
        "bordes":"#f5f5dc",
        "colorbtn":"#5884dd",
        "colorbtnhover":"#99b4e9",
        "colornombres":"#162442",
        "colorhp":"#dc2444",
        "coloratk":"#fc9c59",
        "colordef":"#fcdc58",
        "colorspA":"#85dcfc",
        "colorspD":"#afec94",
        "colorspd":"#fc95ac",
        "colortot":"#8cb4fc",
        "colorclose":"#5884dd",
        "Normal": '#A8A77A',
        "Fuego": '#EE8130',
        "Agua": '#6390F0',
        "Eléctrico": '#F7D02C',
        "Planta": '#7AC74C',
        "Hielo": '#96D9D6',
        "Lucha": '#C22E28',
        "Veneno": '#A33EA1',
        "Tierra": '#E2BF65',
        "Volador": '#A98FF3',
        "Psíquico": '#F95587',
        "Bicho": '#A6B91A',
        "Roca": '#B6A136',
        "Fantasma": '#735797',
        "Dragón": '#6F35FC',
        "Acero": '#B7B7CE',
        "Hada": '#D685AD',
        
      },
    },
  },
  plugins: [],
};
export default config;
