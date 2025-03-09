import H1 from "@/components/typography/H1";
import H4 from "@/components/typography/H4";
import P from "@/components/typography/P";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";

const SkillSubcard = ({
	name = "",
	imageUrl,
	description = "",
	percentage,
}: {
	name: string;
	imageUrl: string;
	description?: string;
	percentage: number;
}) => {
	const [barPercentage, setBarPercentage] = useState(0);
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<motion.div
			className="relative aspect-square perspective-1000"
			animate={isFlipped ? "hovering" : ""}
			onHoverStart={() => {
				setBarPercentage(percentage);
				setIsFlipped(true);
			}}
			onHoverEnd={() => {
				setBarPercentage(0);
				setIsFlipped(false);
			}}
			onClick={() => {
				setIsFlipped(!isFlipped);
			}}
		>
			<Suspense fallback={<Skeleton className="w-full h-full" />}>
				{/* Rotating container */}
				<motion.div
					className="w-full h-full absolute"
					initial={{ rotateY: 0 }}
					transition={{
						duration: 0.6,
					}}
				>
					{/**FrontSide */}
					<motion.div
						className="w-full h-full  absolute top-0 left-0"
						initial={{ backfaceVisibility: "hidden", rotateY: 0 }}
						variants={{ hovering: { rotateY: 180 } }}
					>
						<Card className="w-full h-full flex justify-center items-center p-4 sm:p-4 md:p-6 lg:p-8 xl:p-10">
							{imageUrl && (
								<Image
									width={300}
									height={300}
									src={imageUrl}
									alt={name + " Badge"}
									className="w-full h-full object-contain"
								/>
							)}
						</Card>
					</motion.div>
					{/**BackSide */}
					<motion.div
						className="w-full h-full absolute top-0 left-0"
						initial={{ rotateY: 180, backfaceVisibility: "hidden" }}
						variants={{ hovering: { rotateY: 0 } }}
					>
						<Card className="w-full h-full bg-secondary justify-center items-start p-4 overflow-y-scroll ">
							<H4 className="text-xl font-bold">{name}</H4>
							{description ? (
								<P className="leading-0 hidden sm:hidden md:hidden lg:block xl:block">
									{description}
								</P>
							) : (
								<></>
							)}
							<P className="leading-0 mt-4 ">My Knowledge</P>
							<Progress
								value={barPercentage}
								className="bg-background border-2 w-full"
							/>
						</Card>
					</motion.div>
				</motion.div>
			</Suspense>
		</motion.div>
	);
};

function CardSkills() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<skillsResData | null>();
	const [error, setError] = useState(false);

	type skillsResData = [
		{
			type: string;
			badges: [
				{
					name: string;
					imageUrl: string;
					description: string;
					level: number;
				}
			];
		}
	];

	async function loadSkills() {
		try {
			const res = await fetch("/data/skills.json");

			const resData = (await res.json()) as skillsResData;

			setData(resData);

			setIsLoading(false);
		} catch (error) {
			setError(true);

			console.error("Error fetching data", error);
		}
	}

	useEffect(() => {
		loadSkills();
	}, []);

	if (isLoading) return <Skeleton className="w-full h-full rounded-lg" />;

	if (error)
		return (
			<Card className="w-full h-full rounded-lg place-content-center grid overflow-hidden border-2 border-destructive">
				<P className="w-fit">Error loading data, Please refresh the page</P>
			</Card>
		);

	return (
		<Card id="CardThree" className="h-full w-full  shadow-2xl ">
			<ScrollArea className="w-full h-full">
				<CardHeader>
					<CardTitle>
						<H1 className="text-3xl lg:text-4xl">Skills</H1>
					</CardTitle>
				</CardHeader>
				<CardContent className="h-fit flex flex-col gap-8">
					{data?.map((skillType) => {
						return (
							<div className="flex flex-col gap-4" key={skillType.type}>
								<H4>{skillType.type}</H4>
								<div className="h-fit grid grid-rows-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-8">
									{skillType.badges.map((skill, i) => (
										<SkillSubcard
											key={i}
											name={skill.name}
											imageUrl={skill.imageUrl}
											description={skill.description}
											percentage={skill.level}
										/>
									))}
								</div>
							</div>
						);
					})}
				</CardContent>
			</ScrollArea>
		</Card>
	);
}

export default CardSkills;
