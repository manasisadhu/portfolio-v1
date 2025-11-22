"use client";
import { DownloadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggleButton from "../CustomUi/ThemeToggleButton";
import { Button } from "../shadcnui/button";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Header = () => {
	const [isScroll, setScroll] = useState(false);
	useEffect(() => {
		const handelScroll = () => {
			setScroll(window.scrollY > 50);
		};

		window.addEventListener("scroll", handelScroll);

		return () => {
			window.removeEventListener("scroll", handelScroll);
		};
	}, []);

	return (
		<header
			className={`fixed right-0 left-0 z-50 ${isScroll ? "border-b shadow backdrop-blur-md" : null}`}
			aria-label="app-header">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<div className="flex items-center gap-4">
					<Logo />
				</div>

				<nav
					className="hidden items-center gap-4 md:flex"
					aria-label="Desktop-Nav-Items">
					<DesktopNav />
				</nav>
				<div className="flex items-center gap-4">
					<span className="hidden md:block">
						<ThemeToggleButton />
					</span>

					<Button
						className="hidden bg-[#C700B6] text-white hover:bg-pink-600 md:flex"
						asChild
						aria-label="Cv-Download-Button">
						<a
							href="/Anu'sCv.pdf"
							download={true}
							className="flex items-center gap-2 px-4 tracking-wider">
							<DownloadIcon />
							Dwonload CV
						</a>
					</Button>
				</div>
				<nav
					className="flex gap-4 md:hidden"
					aria-label="Mobile-Nav-Items">
					<span className="block md:hidden">
						<ThemeToggleButton />
					</span>
					<MobileNav />
				</nav>
			</div>
		</header>
	);
};

export default Header;
