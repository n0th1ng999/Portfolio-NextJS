import { motion } from "motion/react";
import React from "react";
import Ornament2 from "./icons/Ornament2";

function CoolAnimation() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="	overflow-hidden absolute  
			-top-28 -left-48 h-96 w-96 "
		>
			<Ornament2 className="w-full h-full text-" />
		</motion.div>
	);
}

export default CoolAnimation;
