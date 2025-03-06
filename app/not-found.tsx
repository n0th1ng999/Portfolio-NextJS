"use client";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import React from "react";

function custom404() {
	return (
		<div className="h-full w-full flex flex-col justify-center items-center">
			<H1>404</H1>
			<P>Page not found</P>
		</div>
	);
}

export default custom404;
