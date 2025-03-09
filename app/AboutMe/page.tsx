"use client";
import PerspectiveGrid from "@/components/icons/PerspectiveGrid";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import CardSkills from "./CardSkills";
import CardBio from "./CardBio";
import CardExperience from "./CardExperience";

function AboutMe() {
	const [isExperienceCardHovered, setIsExperienceCardHovered] = useState(false);
	const [isSkillsCardHovered, setIsSkillsCardHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const resizeListener = () => {
			setIsMobile(window.matchMedia("(max-width: 992px)").matches);
		};

		resizeListener();

		window.addEventListener("resize", resizeListener);

		return () => window.removeEventListener("resize", resizeListener);
	}, []);

	return (
		<>
			<PerspectiveGrid />
			<div className="w-full h-full overflow-hidden relative overflow-y-auto">
				<div
					id="CardGrid"
					className="w-full h-full flex flex-col lg:flex-row items-start justify-start p-4 sm:p-4 md:p-10 lg:p-12   xl:p-20 gap-12"
				>
					<CardBio />

					<div
						id="CardTwoAndThreeStackContainer"
						className="h-full flex w-full sm:w-full lg:w-2/3 flex-col  "
					>
						<motion.div
							id="CardTwoContainer"
							initial={{ height: 0 }}
							animate={{
								height: isMobile
									? "fit-content"
									: isExperienceCardHovered
									? "100%"
									: isSkillsCardHovered
									? "0%"
									: "50%",
								opacity:
									isMobile || isExperienceCardHovered
										? "100%"
										: isSkillsCardHovered
										? "0%"
										: "100%",
								display: !isMobile && isSkillsCardHovered ? "none" : "block",
							}}
							onHoverStart={() => setIsExperienceCardHovered(true)}
							onHoverEnd={() => setIsExperienceCardHovered(false)}
							transition={{ duration: 0.5 }}
							className=" w-full"
						>
							<div id="CardTwoSpacer" className="py-6 w-full h-full ">
								<CardExperience />
							</div>
						</motion.div>

						<motion.div
							id="CardThreeContainer"
							initial={{ height: 0 }}
							animate={{
								height: isMobile
									? "fit-content"
									: isSkillsCardHovered
									? "100%"
									: isExperienceCardHovered
									? "0%"
									: "50%",
								opacity:
									isMobile || isSkillsCardHovered
										? "100%"
										: isExperienceCardHovered
										? "0%"
										: "100%",
								display:
									!isMobile && isExperienceCardHovered ? "none" : "block",
							}}
							transition={{ duration: 0.5 }}
							onHoverStart={() => setIsSkillsCardHovered(true)}
							onHoverEnd={() => setIsSkillsCardHovered(false)}
							className="w-full  "
						>
							<div id="CardThreeSpacer" className="py-6 w-full h-full ">
								<CardSkills />
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutMe;
