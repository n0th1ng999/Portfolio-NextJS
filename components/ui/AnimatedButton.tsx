import { ReactNode } from "react";
import { Button } from "./button";
import { motion } from "motion/react";

export default function AnimatedButton({
	children,
	className,
	variant,
	onClick,
}: {
	children: ReactNode;
	className?: string;
	variant?:
		| "link"
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| null
		| undefined;
	onClick?: () => void;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<Button onClick={onClick} className={className} variant={variant}>
				{children}
			</Button>
		</motion.div>
	);
}
