import React from "react";

function FadeInBottom({ height }: { height?: string }) {
	return (
		<div
			id="fade-in-bottom"
			className="z-10 absolute bottom-0 left-0 
                    w-full h-12 bg-gradient-to-t
                     from-background to-transparent "
			style={{ height: height }}
		/>
	);
}

export default FadeInBottom;
