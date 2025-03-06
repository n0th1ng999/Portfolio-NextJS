import React from "react";
import H1 from "@/components/typography/H1";

import P from "@/components/typography/P";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";

function CardBio() {
	return (
		<motion.div
			id="CardOneContainer"
			initial={{ height: 0 }}
			animate={{ height: "100%" }}
			transition={{ duration: 1 }}
			className="w-full h-full sm:w-full lg:w-1/3 py-6"
		>
			<Card
				id="CardOne"
				className="h-full w-full relative overflow-hidden shadow-2xl  "
			>
				<ScrollArea className="w-full h-full">
					<div
						id="CardOneContent"
						className="h-full w-full overflow-y-scroll no-scrollbar"
					>
						<CardHeader>
							<CardTitle>
								<H1 className="text-3xl  lg:text-4xl ">About Me</H1>
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col ">
							<div className="flex gap-4">
								<div className="w-1/3 h-full aspect-square bg-secondary rounded-lg overflow-hidden border-2 ">
									<Image
										className="w-full h-full"
										width={300}
										height={300}
										src="/MyPicture2.png"
										alt="MyPicture2"
									/>
								</div>
								<div className="flex flex-col gap-2 w-2/3 justify-end">
									<P className=" [&:not(:first-child)]:mt-0 font-bold text-lg">
										Name : Tiago Gabriel
									</P>
									<P className=" [&:not(:first-child)]:mt-0 font-bold text-lg">
										Age: 22
									</P>
									<P className=" [&:not(:first-child)]:mt-0 font-bold text-lg">
										Nationality: Portuguese
									</P>
									<P className=" [&:not(:first-child)]:mt-0 font-bold text-lg">
										From: Porto, Portugal
									</P>
								</div>
							</div>
							<P>
								{`I'm Tiago Pereira, a 22-year-old Junior ML Engineer and Full-Stack Developer from Porto, Portugal. My passion for coding started at 15 with C terminal programs, leading me to pursue a tech-focused education.

I recently earned a degree in TSIW and was fascinated by AI's impact. And I decided during curricular internship to discover how to leverage data to create AI models, aboard Mog Technologies, I investigated data-driven solutions for Green Streaming, merging technology with sustainability. 

I practice Kickboxing and Muay Thai, which sharpen my focus and resilience. I'm also an avid gamer, enjoying the challenge and strategy that keep my mind sharp under pressure. 🥊🎮`}
							</P>
						</CardContent>
					</div>
				</ScrollArea>
			</Card>
		</motion.div>
	);
}

export default CardBio;
