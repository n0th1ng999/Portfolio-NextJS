"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AnimatedButton from "./ui/AnimatedButton";
import { Menu, X } from "lucide-react";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
} from "./ui/drawer";
import P from "./typography/P";
import H2 from "./typography/H2";

function Navbar() {
	const pathname = usePathname();

	const CustomLinkButton = ({
		href,
		children,
		className = "",
		onClick,
	}: {
		href: string;
		children: string;
		className?: string;
		onClick?: () => void;
	}) => {
		return (
			<Link href={href}>
				<AnimatedButton
					onClick={onClick}
					className={"text-lg font-normal " + className}
					variant={pathname == href ? "default" : "ghost"}
				>
					<P>{children}</P>
				</AnimatedButton>
			</Link>
		);
	};

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const resizeListener = () => {
			setIsMobile(window.matchMedia("(max-width: 768px)").matches);
		};

		resizeListener();

		window.addEventListener("resize", resizeListener);

		return () => window.removeEventListener("resize", resizeListener);
	}, []);

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<nav className=" w-full h-fit gap-2 py-4 px-4 sm:px-8 md:px-16 border-b z-10 bg-background">
			{!isMobile ? (
				<div className="flex gap-2">
					<CustomLinkButton href="/">Home</CustomLinkButton>
					<CustomLinkButton href="/AboutMe">About Me</CustomLinkButton>
					<CustomLinkButton href="/MyWork">My Work</CustomLinkButton>
					<CustomLinkButton href="/Contact">Contact Me</CustomLinkButton>
				</div>
			) : (
				<Drawer open={isDrawerOpen} direction="left">
					<DrawerTrigger onClick={() => setIsDrawerOpen(true)} asChild>
						<AnimatedButton variant={"outline"}>
							<Menu size={36} />
						</AnimatedButton>
					</DrawerTrigger>
					<DrawerContent className="h-full w-1/2 rounded-r-xl rounded-l-none border-r border-t-0 border-b-0 p-6 gap-4">
						<DrawerTitle></DrawerTitle>
						<div className="flex w-full h-fit gap-4 mb-2">
							<DrawerClose onClick={() => setIsDrawerOpen(false)}>
								<X />
							</DrawerClose>
							<H2 className="text-2xl bold ">Menu</H2>
						</div>

						<CustomLinkButton
							onClick={() => setIsDrawerOpen(false)}
							className="w-full justify-start"
							href="/"
						>
							Home
						</CustomLinkButton>

						<CustomLinkButton
							onClick={() => setIsDrawerOpen(false)}
							className="w-full justify-start"
							href="/AboutMe"
						>
							About Me
						</CustomLinkButton>

						<CustomLinkButton
							onClick={() => setIsDrawerOpen(false)}
							className="w-full justify-start"
							href="/MyWork"
						>
							My Work
						</CustomLinkButton>

						<CustomLinkButton
							onClick={() => setIsDrawerOpen(false)}
							className="w-full justify-start"
							href="/Contact"
						>
							Contact Me
						</CustomLinkButton>
					</DrawerContent>
				</Drawer>
			)}
		</nav>
	);
}

export default Navbar;
