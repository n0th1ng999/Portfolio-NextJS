import React, { useState } from "react";
import { motion } from "motion/react";

function P({
	children,
	className,
	delay = 0,
	duration = 0.8,
}: {
	children: string;
	className?: string;
	delay?: number;
	duration?: number;
}) {
	if (typeof children !== "string") {
		console.warn("P component expects a string as children.");
		return <p className={className}>{children}</p>;
	}

	const paragraphs = children.split("\n");

	let currentCharIndex = 0; // Keeps track of the character position across paragraphs
	const division = children.replace(/\s+/g, "").length / duration; // Avoids spacing affecting delay

	const [visible, setVisible] = useState(false);

	return (
		<p className={className || " leading-7 [&:not(:first-child)]:mt-6 "}>
			{paragraphs.map((paragraph, pIndex) => (
				<React.Fragment key={pIndex}>
					{pIndex > 0 && <br />}
					{paragraph.split("").map((char) => {
						currentCharIndex += 1;
						return (
							<motion.span
								key={currentCharIndex}
								initial={{ opacity: 0 }}
								onViewportEnter={() => setVisible(true)}
								animate={{ opacity: visible ? 1 : 0 }}
								transition={{ delay: currentCharIndex / division + delay }}
							>
								{char}
							</motion.span>
						);
					})}
				</React.Fragment>
			))}
		</p>
	);
}

export default P;
