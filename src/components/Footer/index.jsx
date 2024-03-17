export default function Footer() {
	return (
		<footer className="bg-[#333333] text-white">
			<div className="max-container flex items-start justify-around py-10 font-light">
				<div>
					<h1 className="py-2 text-4xl">KreaTec GmbH</h1>
					<p>Rudolf-Diesel-Straße 7</p>
					<p className="py-2 text-xl">72250 Freudenstadt</p>
				</div>
				<div>
					<p className="py-2 text-xl duration-300 hover:text-blue-500">Telefon 07441 9245201</p>
					<p className="py-2 text-xl">Fax 07441 9245203</p>
					<p className="py-2 text-xl duration-300 hover:text-blue-500">
						info(at)kreatec-bildung.de
					</p>
				</div>
				<div>
					<p className="py-2 text-xl duration-300 hover:text-blue-500">Seite drucken</p>
					<p className="py-2 text-xl duration-300 hover:text-blue-500">Impressum</p>
					<p className="py-2 text-xl duration-300 hover:text-blue-500">Datenschutz</p>
					<p className="py-2 text-xl duration-300 hover:text-blue-500">by hitcom</p>
				</div>
			</div>
		</footer>
	);
}
