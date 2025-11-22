"use client";
import { navItems } from "@/lib/infomations";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../shadcnui/sheet";
import Logo from "./Logo";

const MobileNav = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<Sheet
			open={isOpen}
			onOpenChange={setOpen}>
			<SheetTrigger>
				<Menu size={28} />
			</SheetTrigger>

			<SheetContent className="bg-white backdrop-blur-md dark:bg-transparent">
				<SheetHeader className="border-b-2">
					<SheetTitle>
						<Logo />
					</SheetTitle>
					<SheetDescription />
				</SheetHeader>

				<div className="grid grid-cols-1 place-items-center gap-4 font-semibold">
					{navItems.map((itm) => (
						<Link
							href={itm.urlid}
							key={itm.id}
							onClick={() => setOpen(false)}
							className="hover:text-pink-500 hover:dark:text-pink-400">
							{itm.label}
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
