import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import H4 from "@/components/typography/H4";
import P from "@/components/typography/P";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { DownloadIcon, Github, LinkIcon, NotebookText } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SubCardExperience({
	title,
	company,
	date,
	tags,
	text,
	skills,
	links,
}: {
	title: string;
	company: string;
	date: string;
	tags: string[];
	text: string;
	skills: string[];
	links: {
		url: string;
		buttonContent: string;
		type: "download" | "report" | "github" | "link";
	}[];
}) {
	return (
		<Card className="w-full flex flex-col p-8 rounded-none border-x-0 border-b-0">
			<H2 className="m-0 text-3xl font-semibold tracking-tight">
				{`${title}`}
			</H2>
			<H3 className="text-muted-foreground leading-0 mt-0 mb-2">
				{`${company} - ${date}`}
			</H3>
			<div className="flex gap-2 flex-wrap">
				{tags.map((tag, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="w-fit h-fit"
					>
						<Badge variant={"outline"} key={i}>
							{tag}
						</Badge>
					</motion.div>
				))}
			</div>
			<div className="mt-2">
				<P className="mt-2" duration={1}>
					{text}
				</P>
			</div>
			<div className="mt-4">
				<H4>Worked with: </H4>
				<div className="flex gap-2 mt-2 flex-wrap">
					{skills.map((sk, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="w-fit h-fit"
						>
							<Badge variant={"outline"} key={i}>
								{sk}
							</Badge>
						</motion.div>
					))}
				</div>
			</div>
			<div className="flex flex-wrap gap-2 mt-6">
				{links.map((link, i) => {
					let Icon;

					switch (link.type) {
						case "download":
							Icon = <DownloadIcon />;
							break;
						case "report":
							Icon = <NotebookText />;
							break;
						case "github":
							Icon = <Github />;
							break;
						case "link":
							Icon = <LinkIcon />;
							break;
						default:
							Icon = null;
					}

					return (
						<Link key={i} className="w-fit h-fit" href={link.url}>
							<AnimatedButton>
								{link.buttonContent} {Icon}
							</AnimatedButton>
						</Link>
					);
				})}
			</div>
		</Card>
	);
}

type StrapiApiExperienceRes = {
	title: string;
	company: string;
	date: string;
	text: string;
	type: string;
	experience_tags: string[];
	experience_skills: string[];
	experience_links: {
		url: string;
		buttonContent: string;
		downloadableContent: string;
		type: "download" | "report" | "github" | "link";
	}[];
	strapiId: number;
}[];

function CardExperience() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<StrapiApiExperienceRes>();
	const [error, setError] = useState(false);
	const [filter, setFilter] = useState<"Experience" | "Education">(
		"Experience"
	);

	// Load experience
	async function loadExperience() {
		try {
			const res = await fetch("/data/experience.json");

			const resData = (await res.json()) as StrapiApiExperienceRes;

			setData(resData);

			setIsLoading(false);
		} catch (error) {
			setError(true);

			console.error("Error fetching data", error);
		}
	}

	useEffect(() => {
		loadExperience();
	}, []);

	if (isLoading) return <Skeleton className="w-full h-full rounded-lg" />;

	if (error)
		return (
			<Card className="w-full h-full rounded-lg place-content-center grid overflow-hidden border-2 border-destructive">
				<P className="w-fit">Error loading data, Please refresh the page</P>
			</Card>
		);

	return (
		<Card id="CardTwo" className="h-full w-full overflow-y-scroll">
			<ScrollArea className="w-full h-full">
				<CardHeader>
					<CardTitle>
						<ToggleGroup
							className="w-fit flex gap-2"
							defaultValue="Experience"
							onValueChange={(value) =>
								setFilter(value as "Experience" | "Education")
							}
							type="single"
						>
							<ToggleGroupItem
								className="data-[state=on]:bg-background data-[state=on]:text-accent-foreground text-muted  hover:bg-background p-0 "
								defaultChecked
								value="Experience"
							>
								<H1 className="text-3xl lg:text-4xl">Experience</H1>
							</ToggleGroupItem>
							<H1 className="text-3xl lg:text-4xl" delay={0.4} duration={0.05}>
								&
							</H1>
							<ToggleGroupItem
								className="data-[state=on]:bg-background data-[state=on]:text-accent-foreground text-muted hover:bg-background p-0 "
								value="Education"
							>
								<H1 delay={0.45} className="text-3xl lg:text-4xl ">
									Education
								</H1>
							</ToggleGroupItem>
						</ToggleGroup>
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-8 p-0 ">
					<div className="w-full flex flex-col items-center">
						{data?.map((data) =>
							data.type === filter ? (
								<SubCardExperience
									title={data.title}
									company={data.company}
									date={data.date}
									tags={data.experience_tags}
									text={data.text}
									skills={data.experience_skills}
									links={data.experience_links}
									key={data.title}
								/>
							) : null
						)}
					</div>
				</CardContent>
			</ScrollArea>
		</Card>
	);
}

export default CardExperience;
