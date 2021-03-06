/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const plugin = require("tailwindcss/plugin");
const bp = require("./styles/breakpoints");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            displayLarge: "var(--fonts-displayLarge)",
            display: "var(--fonts-display)",
            text: "var(--fonts-text)",
            sans: "var(--fonts-text)",
        },
        lineHeight: {
            DEFAULT: "var(--lineHeights-normal)",
            tightest: "var(--lineHeights-tightest)",
            tighter: "var(--lineHeights-tighter)",
            tight: "var(--lineHeights-tight)",
            normal: "var(--lineHeights-normal)",
            loose: "var(--lineHeights-loose)",
        },
        fontSize: {
            "-2": "var(--fontSizes--2)",
            "-1": "var(--fontSizes--1)",
            0: "var(--fontSizes-0)",
            1: "var(--fontSizes-1)",
            2: "var(--fontSizes-2)",
            3: "var(--fontSizes-3)",
            4: "var(--fontSizes-4)",
            5: "var(--fontSizes-5)",
            6: "var(--fontSizes-6)",
            7: "var(--fontSizes-7)",
        },
        fontWeights: {
            standard: "var(--fontWeights-standard)",
            heavy: "var(--fontWeights-heavy)",
        },
        borderRadius: {
            xs: "var(--radii-xs)",
            sm: "var(--radii-sm)", // 4px ish
            md: "var(--radii-md)", // 8px ish
            lg: "var(--radii-lg)", // 12px ish
            xl: "var(--radii-xl)", // 16px ish
            full: "var(--radii-full)", // a lot
        },
        extend: {
            colors: {
                blue: {
                    1: "var(--colors-blue1)",
                    2: "var(--colors-blue2)",
                    3: "var(--colors-blue3)",
                    4: "var(--colors-blue4)",
                    5: "var(--colors-blue5)",
                    6: "var(--colors-blue6)",
                    7: "var(--colors-blue7)",
                    8: "var(--colors-blue8)",
                    9: "var(--colors-blue9)",
                    10: "var(--colors-blue10)",
                    11: "var(--colors-blue11)",
                    12: "var(--colors-blue12)",
                },
                slate: {
                    1: "var(--colors-slate1)",
                    2: "var(--colors-slate2)",
                    3: "var(--colors-slate3)",
                    4: "var(--colors-slate4)",
                    5: "var(--colors-slate5)",
                    6: "var(--colors-slate6)",
                    7: "var(--colors-slate7)",
                    8: "var(--colors-slate8)",
                    9: "var(--colors-slate9)",
                    10: "var(--colors-slate10)",
                    11: "var(--colors-slate11)",
                    12: "var(--colors-slate12)",
                },
                indigo: {
                    1: "var(--colors-indigo1)",
                    2: "var(--colors-indigo2)",
                    3: "var(--colors-indigo3)",
                    4: "var(--colors-indigo4)",
                    5: "var(--colors-indigo5)",
                    6: "var(--colors-indigo6)",
                    7: "var(--colors-indigo7)",
                    8: "var(--colors-indigo8)",
                    9: "var(--colors-indigo9)",
                    10: "var(--colors-indigo10)",
                    11: "var(--colors-indigo11)",
                    12: "var(--colors-indigo12)",
                },
                cyan: {
                    1: "var(--colors-cyan1)",
                    2: "var(--colors-cyan2)",
                    3: "var(--colors-cyan3)",
                    4: "var(--colors-cyan4)",
                    5: "var(--colors-cyan5)",
                    6: "var(--colors-cyan6)",
                    7: "var(--colors-cyan7)",
                    8: "var(--colors-cyan8)",
                    9: "var(--colors-cyan9)",
                    10: "var(--colors-cyan10)",
                    11: "var(--colors-cyan11)",
                    12: "var(--colors-cyan12)",
                },
                green: {
                    1: "var(--colors-green1)",
                    2: "var(--colors-green2)",
                    3: "var(--colors-green3)",
                    4: "var(--colors-green4)",
                    5: "var(--colors-green5)",
                    6: "var(--colors-green6)",
                    7: "var(--colors-green7)",
                    8: "var(--colors-green8)",
                    9: "var(--colors-green9)",
                    10: "var(--colors-green10)",
                    11: "var(--colors-green11)",
                    12: "var(--colors-green12)",
                },
                red: {
                    1: "var(--colors-red1)",
                    2: "var(--colors-red2)",
                    3: "var(--colors-red3)",
                    4: "var(--colors-red4)",
                    5: "var(--colors-red5)",
                    6: "var(--colors-red6)",
                    7: "var(--colors-red7)",
                    8: "var(--colors-red8)",
                    9: "var(--colors-red9)",
                    10: "var(--colors-red10)",
                    11: "var(--colors-red11)",
                    12: "var(--colors-red12)",
                },
            },
        },
        spacing: {
            // base scale
            0: "0rem", // 0px
            "5xs": "var(--space-5xs)", // 4px
            "4xs": "var(--space-4xs)", // 8px
            "3xs": "var(--space-3xs)", // 12px
            "2xs": "var(--space-2xs)", // 16px
            xs: "var(--space-xs)", // 24px
            s: "var(--space-s)", // 32px
            m: "var(--space-m)", // 40px
            l: "var(--space-l)", // 48px
            xl: "var(--space-xl)", // 56px
            "2xl": "var(--space-2xl)", // 64px
            "3xl": "var(--space-3xl)", // 72px
            "4xl": "var(--space-4xl)", // 80px
            "5xl": "var(--space-5xl)", // 88px
            "6xl": "var(--space-6xl)", // 96px

            // One-up
            "5xs-4xs": "var(--space-5xs-4xs)", // 4px -> 8px
            "4xs-3xs": "var(--space-4xs-3xs)", // 8px -> 12px
            "3xs-2xs": "var(--space-3xs-2xs)", // 12px -> 16px
            "2xs-xs": "var(--space-2xs-xs)", // 16px -> 24px
            "xs-s": "var(--space-xs-s)", // 24px -> 32px
            "s-m": "var(--space-s-m)", // 32px -> 40px
            "m-l": "var(--space-m-l)", // 40px -> 48px
            "l-xl": "var(--space-l-xl)", // 48px -> 56px
            "xl-2xl": "var(--space-xl-2xl)", // 56px -> 64px
            "2xl-3xl": "var(--space-2xl-3xl)", // 64px -> 72px
            "3xl-4xl": "var(--space-3xl-4xl)", // 72px -> 80px
            "4xl-5xl": "var(--space-4xl-5xl)", // 80px -> 88px
            "5xl-6xl": "var(--space-5xl-6xl)", // 88px -> 96px

            "section-padding": "var(--space-section-padding)",
        },
        screens: {
            ...bp.breakpointValues,
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".text-hero": {
                    fontSize: "var(--fontSizes-7)",
                    lineHeight: "var(--lineHeights-tightest)",
                    fontFamily: "var(--fonts-displayLarge)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-headline": {
                    fontSize: "var(--fontSizes-6)",
                    lineHeight: "var(--lineHeights-tightest)",
                    fontFamily: "var(--fonts-displayLarge)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-title1": {
                    fontSize: "var(--fontSizes-5)",
                    lineHeight: "var(--lineHeights-tighter)",
                    fontFamily: "var(--fonts-displayLarge)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-title2": {
                    fontSize: "var(--fontSizes-4)",
                    lineHeight: "var(--lineHeights-tight)",
                    fontFamily: "var(--fonts-display)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-title3": {
                    fontSize: "var(--fontSizes-3)",
                    lineHeight: "var(--lineHeights-tight)",
                    fontFamily: "var(--fonts-display)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-heading": {
                    fontSize: "var(--fontSizes-2)",
                    lineHeight: "var(--lineHeights-tight)",
                    fontFamily: "var(--fonts-display)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-subhead": {
                    fontSize: "var(--fontSizes-1)",
                    fontFamily: "var(--fonts-display)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-body": {
                    fontSize: "var(--fontSizes-0)",
                    fontFamily: "var(--fonts-text)",
                },
                ".text-footnote": {
                    fontSize: "var(--fontSizes--1)",
                    fontFamily: "var(--fonts-text)",
                },
                ".text-micro": {
                    fontSize: "var(--fontSizes--2)",
                    fontFamily: "var(--fonts-text)",
                },
            });
        }),
    ],
};
