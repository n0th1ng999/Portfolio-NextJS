import { motion } from "motion/react";
import React, { ReactNode } from "react";

export default function AnimatedContainer({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			{children}
		</motion.div>
	);
}
