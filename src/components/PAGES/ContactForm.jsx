import { useState } from "react";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("sent");
		if (name && email && subject && message != "") {
			setName("");
			setEmail("");
			setSubject("");
			setMessage("");
			//error message for each if field is empty with danger color in placeholder input
		}
	};

	return (
		<form className="flex flex-col w-1/2 gap-3 mx-auto mt-10 py-8 px-16 rounded-xl shadow-lg">
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
						className="w-full py-1.5 px-3 rounded-lg border-2 outline-none"
					/>
				</div>
				<div className="lg:w-1/2">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full py-1.5 px-3 rounded-lg border-2 outline-none"
					/>
				</div>
			</div>
			<div className="">
				<label htmlFor="subject">Subject</label>
				<input
					type="text"
					id="subject"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					className="w-full py-1.5 px-3 rounded-lg border-2 outline-none"
				/>
			</div>
			<div className="mb-10">
				<label htmlFor="message">Message</label>
				<textarea
					type="text"
					id="name"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="w-full py-1.5 px-3 rounded-lg border-2 outline-none"
				/>
			</div>
			<button onClick={handleSubmit}>Send</button>
		</form>
	);
};

export default ContactForm;
