"use client";
import PerspectiveGrid from "@/components/icons/PerspectiveGrid";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import React, { ReactNode, useEffect, useState } from "react";

function WorkCard({
	title = "",
	type = "",
	url = "",
	bannerUrl = "",
}: {
	title?: string;
	type?: string;
	url?: string;
	bannerUrl?: string;
}) {
	return (
		<motion.div
			layout
			exit={{ opacity: 0, scale: 0 }}
			className="min-h-96 max-h-fit w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
		>
			<AnimatedCard className="h-full w-full">
				{/** PLACEHOLDER */}
				<div className="h-3/5 w-full bg-secondary border-b">
					{bannerUrl && (
						<Image
							className="w-full h-full object-cover"
							src={bannerUrl}
							width={1000}
							height={500}
							alt={title}
						/>
					)}
				</div>

				<div className="w-full min-h-2/5 max-h-fit flex flex-col p-4 justify-between ">
					<div>
						<H3 className="text-sm text-secondary-foreground">{type}</H3>
						<H2>{title}</H2>
					</div>
					<a href={url} className="w-fit">
						<AnimatedButton className="p-0 w-fit" variant="link">
							View Project <ArrowRight />
						</AnimatedButton>
					</a>
				</div>
			</AnimatedCard>
		</motion.div>
	);
}

function MyWork() {
	const [filter, SetFilter] = useState<string>("");

	type projectsResData = {
		typeName: string;
		projects: {
			title: string;
			bannerUrl: string;
			projectUrl: string;
		}[];
	}[];

	const [projectsData, setProjectsData] = useState<projectsResData>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	async function fetchData() {
		try {
			const response = await fetch("/data/projects.json");

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const jsonData = await response.json();

			setProjectsData(jsonData);

			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsError(true);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	function renderCards() {
		if (isError) {
			return <div>An error occurred while fetching data.</div>;
		}

		if (isLoading) {
			return (
				<>
					<div className="flex gap-2">
						<Skeleton className=" rounded-full w-16 h-4" />
						<Skeleton className=" rounded-full w-16 h-4" />
						<Skeleton className=" rounded-full w-16 h-4" />
					</div>
					<div className="w-full h-full flex flex-wrap">
						<div className="h-96 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
							<Skeleton className="h-full w-full" />
						</div>
						<div className="h-96 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
							<Skeleton className="h-full w-full" />
						</div>
						<div className="h-96 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
							<Skeleton className="h-full w-full" />
						</div>
						<div className="h-96 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
							<Skeleton className="h-full w-full" />
						</div>
					</div>
				</>
			);
		}

		if (projectsData.length <= 0) {
			return <div>No Work Data Was Retrieved ...</div>;
		}

		function renderProjectsFiltered() {
			const cards: ReactNode[] = [];

			for (const projectsByType of projectsData) {
				if (filter === "" || filter === projectsByType.typeName) {
					projectsByType.projects.forEach((project) => {
						cards.push(
							<WorkCard
								key={project.title}
								title={project.title}
								type={projectsByType.typeName}
								url={project.projectUrl}
								bannerUrl={project.bannerUrl}
							/>
						);
					});
				}
			}

			return cards;
		}

		return (
			<>
				<div className="flex gap-4 flex-wrap">
					<Badge
						key={-1}
						variant={filter === "" ? "default" : "secondary"}
						onClick={() => SetFilter("")}
					>
						<P className="h-fit pointer-events-none" duration={0.4}>
							All
						</P>
					</Badge>
					{projectsData.map((projectsByType, index) => (
						<Badge
							className=""
							variant={
								filter === projectsByType.typeName ? "default" : "secondary"
							}
							onClick={() => SetFilter(projectsByType.typeName)}
							key={index}
						>
							<P className="h-fit pointer-events-none" duration={0.4}>
								{projectsByType.typeName}
							</P>
						</Badge>
					))}
				</div>
				<div className="w-full h-fit flex flex-wrap">
					<AnimatePresence mode={"popLayout"}>
						{renderProjectsFiltered()}
					</AnimatePresence>
				</div>
			</>
		);
	}

	if (isError) {
		return (
			<div
				className="w-full h-full flex flex-col justify-center items-center 
			border-2 
			border-destructive"
			>
				<H1>Error fetching data</H1>
				<P>Please refresh this page</P>
			</div>
		);
	}

	return (
		<>
			<div className="w-full h-full relative overflow-hidden ">
				<ScrollArea className="w-full h-full p-4 sm:p-4 md:p-12 ">
					<H1
						className=" text-4xl 
						font-extrabold tracking-tight
						lg:text-5xl block relative
						mb-6"
					>
						Featured Projects
					</H1>
					{/**Filters */}

					{renderCards()}
				</ScrollArea>
			</div>
			<PerspectiveGrid />
		</>
	);
}

export default MyWork;
