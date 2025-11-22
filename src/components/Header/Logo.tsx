import { CodeXmlIcon } from "lucide-react";
import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href={"/"}
			aria-label="Webapp-Logo"
			className="flex items-center gap-2">
			<div className="rounded-full bg-black p-2 dark:bg-white">
				<CodeXmlIcon
					size={26}
					className="text-white dark:text-black"
				/>
			</div>
			<h1 className="text-3xl font-semibold">Portfolio</h1>
			<div className="mt-4 rounded-full bg-pink-500 p-1"></div>
		</Link>
	);
};

export default Logo;
