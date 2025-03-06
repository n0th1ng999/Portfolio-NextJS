import React, { ReactNode, useState } from "react";
import { Card } from "./card";
import { motion } from "motion/react";

export default function AnimatedCard({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const [visibility, setVisibility] = useState(false);

	return (
		<motion.div layout className={className}>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				onViewportEnter={() => setVisibility(true)}
				animate={visibility ? "visible" : ""}
				variants={{
					visible: { opacity: 1, scale: "100%" },
				}}
				transition={{ duration: 0.5 }}
				className="h-full w-full"
			>
				<Card className="h-full w-full overflow-hidden flex flex-col">
					{children}
				</Card>
			</motion.div>
		</motion.div>
	);
}
