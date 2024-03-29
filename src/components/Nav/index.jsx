import Logo from "../../assets/Logo.jpg";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<header>
			<nav className="max_container flex items-end justify-between pb-12 pt-4">
				<div>
					<img src={Logo} alt="logo" className="pt-6" />
				</div>
				<div className="flex gap-10 text-2xl font-normal ">
					<Link className="p-4 shadow-lg transition-all duration-500 hover:bg-blue-800 hover:text-white hover:shadow-2xl hover:shadow-blue-900/70">
						Über uns
					</Link>
					<Link className="p-4 shadow-lg transition-all duration-500 hover:bg-blue-800 hover:text-white hover:shadow-2xl hover:shadow-blue-900/70">
						Maßnahmen & Projekte
					</Link>
					<Link className="p-4 shadow-lg transition-all duration-500 hover:bg-blue-800 hover:text-white hover:shadow-2xl hover:shadow-blue-900/70">
						Aktuelles
					</Link>
				</div>
			</nav>
		</header>
	);
}
