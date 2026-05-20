import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        brand: {
          blue: "#2341a1",
          coral: "#fc501c",
        },
        primary: {
          DEFAULT: "#fc501c",
        },
        secondary: {
          DEFAULT: "#2341a1",
        },
      },
    },
  },
};

export default config;
