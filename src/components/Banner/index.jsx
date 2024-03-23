import banner from "../../assets/banner.png";

export default function Banner() {
	return (
		<section>
			<div className="max_container">
				<img src={banner} alt="banner" className="py-4" />
			</div>
		</section>
	);
}
