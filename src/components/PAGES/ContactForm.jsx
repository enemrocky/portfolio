import { useState } from "react";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	// State to track errors
	const [errors, setErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();

		// Reset errors
		setErrors({});

		// Validate form
		let formErrors = {};
		if (!name) formErrors.name = "Name is required";
		if (!email) formErrors.email = "Email is required";
		if (!subject) formErrors.subject = "Subject is required";
		if (!message) formErrors.message = "Message is required";

		// If there are errors, do not submit the form
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		console.log("Form sent");

		// Clear form
		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
	};

	return (
		<form
			className="flex flex-col w-1/2 gap-3 mx-auto mt-10 py-8 px-16 rounded-xl shadow-lg"
			onSubmit={handleSubmit}>
			<h2 className="text-gray-600 text-2xl mb-8">
				Send your message through this form
			</h2>
			<div className="lg:flex justify-between gap-8">
				<div className="lg:w-1/2">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className={`w-full py-1.5 px-3 rounded-lg border-2 outline-none ${
							errors.name
								? "border-red-500 placeholder-red-500"
								: ""
						}`}
						placeholder={errors.name ? errors.name : ""}
					/>
				</div>
				<div className="lg:w-1/2">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={`w-full py-1.5 px-3 rounded-lg border-2 outline-none ${
							errors.email
								? "border-red-500 placeholder-red-500"
								: ""
						}`}
						placeholder={errors.email ? errors.email : ""}
					/>
				</div>
			</div>
			<div>
				<label htmlFor="subject">Subject</label>
				<input
					type="text"
					id="subject"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					className={`w-full py-1.5 px-3 rounded-lg border-2 outline-none ${
						errors.subject
							? "border-red-500 placeholder-red-500"
							: ""
					}`}
					placeholder={errors.subject ? errors.subject : ""}
				/>
			</div>
			<div className="mb-10">
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className={`w-full py-1.5 px-3 rounded-lg border-2 outline-none ${
						errors.message
							? "border-red-500 placeholder-red-500"
							: ""
					}`}
					placeholder={errors.message ? errors.message : ""}
				/>
			</div>
			<button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
				Send
			</button>
		</form>
	);
};

export default ContactForm;
