import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-syne",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    title: "Expense Voyage",
    description: "Expense Voyage",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${syne.variable} ${manrope.variable}`}>{children}</body>
        </html>
    );
}
