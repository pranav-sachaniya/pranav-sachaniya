import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Since Inter Display isn't natively on Google Fonts, we'll use Inter for both
// but with different CSS classes to adjust tracking for the display variant
export const interDisplay = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-display",
});
