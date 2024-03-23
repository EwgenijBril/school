export default function GoogleMap() {
	return (
		<section className="max_container relative h-0 overflow-hidden pb-[36%]">
			<iframe
				className="absolute left-0 top-0 h-full w-full border-0 p-4"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.62375428273!2d8.43906397682937!3d48.463748128397114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797344e553df9f1%3A0x4f6c7b0cda3a365d!2sKreaTec%20GmbH!5e0!3m2!1sen!2sde!4v1711175556289!5m2!1sen!2sde"
				width="600"
				height="450"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="KreaTec GmbH"
			></iframe>
		</section>
	);
}
