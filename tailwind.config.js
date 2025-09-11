export const theme = {
    extend: {
        animation: {
            "float-slow": "float 10s ease-in-out infinite",
            "float-medium": "float 6s ease-in-out infinite",
            "float-fast": "float 4s ease-in-out infinite",
        },
        keyframes: {
            float: {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-10px)" },
            },
        },
    },
};
