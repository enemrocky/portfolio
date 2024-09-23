import ContactForm from "./ContactForm";
import Card from "../UI/Card";

const Contact = () => {
	return (
		<>
			<div className="flex flex-col gap-10 mb-16">
				<h1 className="text-3xl lg:text-5xl text-center mt-10">
					Get in touch
				</h1>
				<div className="w-4/5 lg:w-fit mx-auto">
					<div className="lg:flex justify-between gap-6">
						<Card title="Phone" body="078 178 5298" />
						<Card title="Email" body="enemrocky@enemrocky.com" />
						<Card title="Twitter" body="@enemrocky" />
					</div>
				</div>
				{/* form for feedback */}
				<ContactForm />
			</div>
		</>
	);
};

export default Contact;
