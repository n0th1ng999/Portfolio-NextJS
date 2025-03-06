import Image from "next/image";
import React from "react";

const PerspectiveGrid = () => {
	return (
		<div className="w-full h-full  absolute opacity-10 pointer-events-none -z-30">
			<svg
				className="w-full h-full text-foreground "
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<pattern
						id="dotPattern"
						x="0"
						y="0"
						width="40"
						height="40"
						patternUnits="userSpaceOnUse"
					>
						<circle cx="1" cy="1" r="1" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#dotPattern)" />
			</svg>
		</div>
	);
};

export default PerspectiveGrid;
