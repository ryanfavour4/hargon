import type { Config } from "tailwindcss";
import { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./layout/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#23A323",
                secondary: "#0E390E",
                grey: "#363939",
                dark: "#1D1D1D",
                light: "#ffffff",
            },
            translate: ["group-hover", "hover"] as unknown as ResolvableTo<
                KeyValuePair<string, string>
            >,
        },
    },
    plugins: [],
};

export default config;

