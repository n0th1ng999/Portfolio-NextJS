"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import P from "./typography/P";

import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";

import Link from "next/link";
import AnimatedButton from "./ui/AnimatedButton";
import AnimatedContainer from "./ui/AnimatedContainer";

function Footer() {
	// Detect system preference on mount
	const [isDark, setIsDark] = useState<boolean>(() => {
		const darkModePreference = localStorage.getItem("darkMode");

		if (darkModePreference === "true") {
			return true;
		} else if (darkModePreference === "false") {
			return false;
		} else {
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			return mediaQuery.matches;
		}
	});

	useEffect(() => {
		if (isDark) {
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "true");
		} else {
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "false");
		}
	}, [isDark]);

	return (
		<div className="bg-background flex items w-full h-fit bottom-0 left-0 justify-between py-4 px-8 sm:px-8 md:px-16  z-20 border-t ">
			<div className="flex gap-2">
				<Link
					href="https://www.linkedin.com/in/tiagogabrieldev"
					className="h-fit w-fit flex justify-center items-center"
				>
					<AnimatedButton variant={"ghost"} className="aspect-square">
						<Linkedin></Linkedin>
					</AnimatedButton>
				</Link>
				<Link
					href="https://github.com/n0th1ng999"
					className="h-fit w-fit flex justify-center items-center"
				>
					<AnimatedButton variant={"ghost"} className="aspect-square">
						<Github></Github>
					</AnimatedButton>
				</Link>
				<Link
					href="mailto:tigasdeveloper@gmail.com"
					className="h-fit w-fit flex justify-center items-center"
				>
					<AnimatedButton variant={"ghost"} className="aspect-square">
						<Mail />
					</AnimatedButton>
				</Link>
			</div>

			<div className="items-center hidden md:flex sm:hidden">
				<P>
					{`${new Date().getFullYear()} - Tiago Pereira. All rights reserved.`}
				</P>
			</div>

			<AnimatedContainer className="flex gap-4 items-center">
				<ToggleGroup type="single" defaultValue="english">
					<ToggleGroupItem
						disabled
						className="text-xl aspect-square"
						value="portuguese"
					>
						&#127477;&#127481;
					</ToggleGroupItem>
					<ToggleGroupItem className="text-xl aspect-square" value="english">
						󠁧&#127468;&#127463;
					</ToggleGroupItem>
				</ToggleGroup>
				<div className="flex gap-2">
					{isDark ? <Moon /> : <Sun />}
					<Switch
						aria-label="Dark Mode / Light Mode Toggle"
						checked={isDark}
						onCheckedChange={() => setIsDark(!isDark)}
					/>
				</div>
			</AnimatedContainer>
		</div>
	);
}

export default Footer;
