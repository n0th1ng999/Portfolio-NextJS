import { motion } from "motion/react";
import React from "react";

function Ornament1({ className }: { className: string }) {
	const duration = 1;
	const initial = { pathLength: 0, opacity: 0 };
	const animate = { pathLength: 1, opacity: 1 };

	return (
		<svg
			width="176"
			height="24"
			viewBox="0 0 176 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<motion.path
				d="M79 21.5L97.5 3"
				stroke="currentColor" // Uses the color from the SVG parent
				strokeWidth="3"
				strokeLinecap="round"
				initial={initial}
				animate={animate}
				transition={{ duration }}
			/>
			<motion.path
				d="M98 21.5L116.5 3"
				stroke="currentColor" // Uses the color from the SVG parent
				strokeWidth="3"
				strokeLinecap="round"
				initial={initial}
				animate={animate}
				transition={{ duration }}
			/>
			<motion.path
				d="M60 21.5L78.5 3"
				stroke="currentColor" // Uses the color from the SVG parent
				strokeWidth="3"
				strokeLinecap="round"
				initial={initial}
				animate={animate}
				transition={{ duration }}
			/>
			<motion.path
				d="M136 21.5L154.5 3"
				stroke="currentColor" // Uses the color from the SVG parent
				strokeWidth="3"
				strokeLinecap="round"
				initial={initial}
				animate={animate}
				transition={{ duration }}
			/>
			<motion.path
				d="M155 21.5L173.5 3"
				stroke="currentColor" // Uses the color from the SVG parent
				strokeWidth="3"
				strokeLinecap="round"
				initial={initial}
				animate={animate}
				transition={{ duration }}
			/>
			<motion.path
				d="M117 21.5L135.5 3"
				stroke="currentColor" // Uses the color from the SVG parent
				strokeWidth="3"
				strokeLinecap="round"
				initial={initial}
				animate={animate}
				transition={{ duration }}
			/>
			<motion.path
				d="M22 21.5L40.5 3"
				stroke="currentColor" // Uses the color from the SVG parent
				strokeWidth="3"
				strokeLinecap="round"
				initial={initial}
				animate={animate}
				transition={{ duration }}
			/>
			<motion.path
				d="M41 21.5L59.5 3"
				stroke="currentColor" // Uses the color from the SVG parent
				strokeWidth="3"
				strokeLinecap="round"
				initial={initial}
				animate={animate}
				transition={{ duration }}
			/>
			<motion.path
				stroke="currentColor" // Uses the color from the SVG parent
				strokeWidth="3"
				strokeLinecap="round"
				initial={initial}
				animate={animate}
				transition={{ duration }}
				d="M3 21.5L21.5 3"
			/>
		</svg>
	);
}

export default Ornament1;
