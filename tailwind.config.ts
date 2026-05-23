import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#2563eb",
                secondary: "#9333ea",
                background: "#0f172a",
                foreground: "#f8fafc",
            },

            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
            },

            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },

            animation: {
                float: "float 3s ease-in-out infinite",
            },

            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        transform: "translateY(-10px)",
                    },
                },
            },
        },
    },

    plugins: [],
};

export default config;