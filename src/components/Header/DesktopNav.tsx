import { navItems } from "@/lib/infomations";
import Link from "next/link";

const DesktopNav = () => {
	return (
		<>
			{navItems.map((itm) => (
				<Link
					className="font-semibold hover:text-pink-500 hover:dark:text-pink-400"
					key={itm.id}
					href={itm.urlid}>
					{itm.label}
				</Link>
			))}
		</>
	);
};

export default DesktopNav;
