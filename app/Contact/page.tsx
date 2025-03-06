"use client";
import PerspectiveGrid from "@/components/icons/PerspectiveGrid";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H4 from "@/components/typography/H4";
import P from "@/components/typography/P";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Newspaper, Send } from "lucide-react";
import React, { useEffect, useState } from "react";

function Contact() {
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");

	const content = (
		<>
			<H1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
				Contact Me
			</H1>
			<div className="w-full h-full flex flex-wrap">
				<div className="h-full w-full sm:w-full md:w-2/3 p-4">
					<AnimatedCard className="h-full w-full">
						<CardHeader>
							<CardTitle>
								<H2>Send an email</H2>
							</CardTitle>
						</CardHeader>
						<CardContent className="flex w-full flex-col h-full gap-4">
							
								<Label htmlFor="InputSubject">Subject</Label>
								<Input
									onChange={(ev) => {
										setSubject(ev.target.value);
									}}
									id="InputSubject"
								></Input>
								<Label htmlFor="InputMessage">Message</Label>
								<Textarea
									onChange={(ev) => {
										setBody(ev.target.value);
									}}
									className="h-full"
									id="InputMessage"
								></Textarea>

								<div className="flex w-full flex-wrap gap-2">
									<a
										className="w-fit"
										href={`mailto:tigasdeveloper@gmail.com?subject=${subject}&body=${body}`}
									>
										<Button className="w-full ">
											Send Email <Send />
										</Button>
									</a>
									<a href={`mailto:tigasdeveloper@gmail.com`}>
										<Button variant="link" className="w-fit self-center px-1">
											<P> TigasDeveloper@gmail.com</P>
										</Button>
									</a>
								</div>
							
						</CardContent>
					</AnimatedCard>
				</div>
				<div className="h-full w-full sm:w-full md:w-1/3 p-4">
					<AnimatedCard className="w-full h-full">
						<CardHeader>
							<CardTitle>
								<H2>Contacts</H2>
							</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col gap-4 ">
							<a href="mailto:tigasdeveloper@gmail.com">
								<AnimatedButton variant="link" className="w-fit">
									<Mail />
									<H4>Email</H4>
								</AnimatedButton>
							</a>
							<a href="https://www.linkedin.com/in/tiagogabrieldev/">
								<AnimatedButton variant="link" className="w-fit">
									<Linkedin />
									<H4>LinkedIn</H4>
								</AnimatedButton>
							</a>

							<a href="https://github.com/n0th1ng999">
								<AnimatedButton variant="link" className="w-fit">
									<Github />
									<H4>Github</H4>
								</AnimatedButton>
							</a>

							<a href="https://medium.com/@tigasdeveloper">
								<AnimatedButton variant="link" className="w-fit">
									<Newspaper />
									<H4>Medium</H4>
								</AnimatedButton>
							</a>
						</CardContent>
					</AnimatedCard>
				</div>
			</div>
		</>
	);

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const resizeListener = () => {
			setIsMobile(window.matchMedia("(max-width: 768px)").matches);
		};

		resizeListener();

		window.addEventListener("resize", resizeListener);

		return () => window.removeEventListener("resize", resizeListener);
	}, []);

	if (isMobile) {
		return (
			<ScrollArea className="w-full h-full flex flex-col gap-6 p-8">
				<PerspectiveGrid />
				{content}
			</ScrollArea>
		);
	}

	return (
		<div className="w-full h-full flex flex-col p-12">
			<PerspectiveGrid />
			{content}
		</div>
	);
}

export default Contact;
