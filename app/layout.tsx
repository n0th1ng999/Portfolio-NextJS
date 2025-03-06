import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hankenGrotesk = Hanken_Grotesk({
	variable: "--font-hanken-grotesk",
	subsets: ["latin"],
	style: ["normal"],
});

export const metadata = {
	title: "Tiago's Portfolio",
	description:
		"A personal website and portfolio for the ML Engineer and Full-Stack Developer Tiago Gabriel Pereira",
	icons: {
		icon: [
			{
				url: "/faviconDark.svg",
				media: "(prefers-color-scheme: dark)", // Dark mode favicon
			},
			{
				url: "/faviconLight.svg",
				media: "(prefers-color-scheme: light)", // Light mode favicon
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${hankenGrotesk.className} antialiased h-screen w-screen flex flex-col relative overflow-hidden`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
