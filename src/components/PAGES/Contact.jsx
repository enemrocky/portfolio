import ContactForm from "./ContactForm";
import ContactCard from "../UI/ContactCard";

const Contact = () => {
	//form for feedback
	return (
		<>
			<div className="flex flex-col gap-10 mb-16">
				<h1 className="text-5xl text-center mt-10">Get in touch</h1>

				<div className="w-4/5 lg:w-fit mx-auto">
					<div className="lg:flex justify-between gap-6">
						<ContactCard title="phone" body="078 178 5298" />
						<ContactCard
							title="email"
							body="enemrocky@enemrocky.com"
						/>
						<ContactCard title="phone" body="078 178 5298" />
					</div>
				</div>
				<ContactForm />
			</div>
		</>
	);
};

export default Contact;
