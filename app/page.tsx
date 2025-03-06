"use client";
import Image from "next/image";
import { FileDown } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import { motion } from "motion/react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Ornament1 from "@/components/icons/Ornament1";
import P from "@/components/typography/P";
import Ornament2 from "@/components/icons/Ornament2";
import PerspectiveGrid from "@/components/icons/PerspectiveGrid";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
	const content = () => {
		return (
			<div className="w-full h-full flex flex-col sm:flex-col md:flex-row items-center justify-center gap-4 sm:gap-4 md:gap-12 p-8 ">
				<Ornament2 className="hidden sm:hidden md:flex" />

				<motion.div className="w-fit h-fit rotate-90 flex items-center gap-2 absolute top-[16rem] -right-28"></motion.div>
				<div className="flex flex-col items-center gap-6 w-[200px] sm:w-[200px] md:w-[300px]">
					<Suspense fallback={<>Loading...</>}>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
							id="PictureContainer"
							className="rounded-xl bg-slate-200 overflow-hidden "
						>
							<Image
								alt="MyPicture"
								src="/MyPicture.png"
								width={300}
								height={300}
							/>
						</motion.div>
					</Suspense>
					<Ornament1 className="text-text w-full h-8" />
				</div>
				<div id="HomeTextContainer">
					<div className="mb-8">
						<H1>{"Hello I'm Tiago Pereira! 👋"}</H1>
						<H2>{"I'm a Full-Stack Developer and ML Engineer."}</H2>
						<P>Come and get to know me and my work.</P>
					</div>
					<div id="buttonContainer" className="flex gap-4">
						<AnimatedButton className="text-xl ">
							Download CV <FileDown size={48} />
						</AnimatedButton>

						<AnimatedButton className="text-xl " variant={"outline"}>
							My Work
						</AnimatedButton>
					</div>
				</div>
			</div>
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

	if (isMobile) {
		return (
			<ScrollArea className="w-full h-full">
				<PerspectiveGrid />
				{content()}
			</ScrollArea>
		);
	}

	return (
		<>
			<PerspectiveGrid />
			{content()}
		</>
	);
}
