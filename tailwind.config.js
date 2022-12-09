/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/**/**/*.{js,ts,jsx,tsx}",
    "./design-system/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aeonik-Air", "sans-serif", ...defaultTheme.fontFamily.sans],
        serif: ["Montserrat", "sans-serif"],
      },
      // Semantic Colors
      colors: {
        semPrimary: "#221B62",
        navLink: "#DBD8FB",
        primaryGradient: "linear-gradient(180deg,_#6F61ED_0%,_#473D9D_100%);",
        secondaryGradient: "linear-gradient(180deg,_#F4E6DE_0%,_#DAC6BC_100%)",
        primaryText: "#433A81",
        secondaryText: "#DBD8FB",
        semBlack: "#554A68",
        dashboardBg: "#F9F8FB",
        inputBg: "#F5F5F7",
        inputDisabled: "#E6E6ED",
        inputPlaceholder: "#6B6B86",

        semBlue50: "#f1effd",
        semBlue100: "#d3cefa",
        semBlue200: "#bdb6f7",
        semBlue300: "#9f95f4",
        semBlue400: "#8d81f1",
        semBlue500: "#7061ee",
        semBlue600: "#6657E6",
        semBlue700: "#5045a9",
        semBlue800: "#3e3583",
        semBlue900: "#2f2964",

        // Semantic secondary colors
        secondary50: "#fdfbfa",
        secondary100: "#faf3f0",
        secondary200: "#f8eee8",
        secondary300: "#f4e6de",
        secondary400: "#f2e1d8",
        secondary500: "#efd9ce",
        secondary600: "#d9c5bb",
        secondary700: "#aa9a92",
        secondary800: "#837771",
        secondary900: "#645b57",

        // Semantic Grey colors
        semGrey50: "#ededee",
        semGrey100: "#c8c7cb",
        semGrey200: "#aeacb2",
        semGrey300: "#89868f",
        semGrey400: "#726e79",
        semGrey500: "#4f4a58",
        semGrey600: "#484350",
        semGrey700: "#38353e",
        semGrey800: "#2b2930",
        semGrey900: "#211f25",

        // Semantic Success colors
        success50: "#e9f8f2",
        success100: "#bae8d5",
        success200: "#99ddc1",
        success300: "#6bcea5",
        success400: "#4ec593",
        success500: "#22b678",
        success600: "#1fa66d",
        success700: "#188155",
        success800: "#136442",
        success900: "#0e4c32",

        // Semantic Error colors
        error50: "#fdeded",
        error100: "#fac7c7",
        error200: "#f7abab",
        error300: "#f48585",
        error400: "#f16d6d",
        error500: "#ee4949",
        error600: "#d94242",
        error700: "#a93434",
        error800: "#832828",
        error900: "#641f1f",

        // Semantic Warning colors
        warning50: "#fff4ea",
        warning100: "#ffddbd",
        warning200: "#ffcc9d",
        warning300: "#ffb570",
        warning400: "#ffa654",
        warning500: "#ff9029",
        warning600: "#e88325",
        warning700: "#b5661d",
        warning800: "#8c4f17",
        warning900: "#6b3c11",

        // Semantic info colors
        info50: "#ebeffa",
        info100: "#c0cdef",
        info200: "#a1b5e7",
        info300: "#7694db",
        info400: "#5c7fd5",
        info500: "#335fca",
        info600: "#2e56b8",
        info700: "#24438f",
        info800: "#1c346f",
        info900: "#152855",
      },
      boxShadow: {
        semShadow1: "0px 6px 6px rgba(24, 39, 75, 0.12)",
        semShadow2: "0px 6px 12px rgba(24,39, 75, 0.12)",
        semShadow3: "0px 12px 42px -6px rgba(24, 39, 75, 0.16)",
        semShadow4: "0px 14px 64px -4px rgba(24, 39, 75, 0.18)",
      },
      screens: {
        xsm: "1px",
        // => @media (min-width: 1px) { ... }

        sm: "321px",
        // => @media (min-width: 320px) { ... }

        md: "450px",
        // => @media (min-width: 450px) { ... }

        lg: "560px",
        // => @media (min-width: 560px) { ... }

        BigPhones: "640px",
        // => @media (min-width: 640px) { ... }

        tablets: "768px",
        // => @media (min-width: 768px) { ... }

        smLaptops: "1024px",
        // => @media (min-width: 1024px) { ... }

        laptop: "1280px",
        // => @media (min-width: 1280px) { ... }

        desktop: "1426px",
        // => @media (min-width: 1728px) { ... }

        lgDesktops: "2000px",
        // => @media (min-width: 1728px) { ... }
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        loading: "shimmer 2s infinite",
      },
    },
    backgroundImage: {
      "hero-pattern": "url('/img/hero-bg-img.svg')",
      "use-case-page-hero-bg": "url('/img/use-case-page-hero-bg.svg')",
      "prices-page-bg": "url('/img/prices-page-bg.svg')",
      "skeleton-gradient":
        "linear-gradient(90deg, rgba(#fff, 0) 0, rgba(#fff, 0.2) 20%, rgba(#fff, 0.5) 60%, rgba(#fff, 0)",
    },
  },
  plugins: [
    // Initialize with default values (see options below)
    require("tailwindcss-radix")(),
  ],
};
