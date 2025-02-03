import type { Metadata } from "next";
import { Geist, Spline_Sans } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/navigation/navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const splineSans = Spline_Sans({
	variable: "--font-spline-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Nucleus by AM",
	description: "Articulate Marketing's Nucleus landing page, created for an interview.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${splineSans.variable}`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
