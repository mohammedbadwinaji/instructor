import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { useRef } from "react";

export default function Contact() {
	const form = useRef({});
	const sendEmail: React.FormEventHandler<HTMLFormElement> = (
		ev: React.FormEvent<HTMLFormElement>
	) => {
		ev.preventDefault();
		console.log(form.current);
		console.log(import.meta.env.VITE_PUBLIC_KEY);

		emailjs
			.send(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then((response) => {
				console.log(response);
				alert("message send successfully");
				// return response;
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="container">
			<h1 className="text-gray-800 text-3xl font-bold p-2 mb-5 capitalize">
				contact us
			</h1>
			<div className="flex flex-wrap container justify-between items-center mt-8">
				<div className="w-full md:w-1/2 text-center py-2 px-4 mb-6 md:mb-0">
					<p className="text-gray-800 pt-2 text-md leading-7">
						Consectetur sodales et, congue sem velit et facilisi metus ac,
						mattis quis est egestas.
					</p>
					<div>
						<div className="flex  items-center mt-8 text-start border-b-2 border-teal-800 pb-5 ">
							<div className="size-12  rounded-full bg-gray-200 flex justify-center items-center me-4">
								<MapPinIcon className="size-6 text-teal-500" />
							</div>
							<div>
								<h4 className="text-sm text-gray-800"> Address </h4>
								<p className="text-gray-900 leading-7">
									{" "}
									123 Fifth Avenue, NY 126004, New York, USA.
								</p>
							</div>
						</div>
						<div className="flex  items-center mt-8 text-start border-b-2 border-teal-800 pb-5 ">
							<div className="size-12  rounded-full bg-gray-200 flex justify-center items-center me-4">
								<PhoneIcon className="size-6 text-teal-500" />
							</div>
							<div>
								<h4 className="text-sm text-gray-800"> Call Us </h4>
								<p className="text-gray-900 leading-7"> +1 123 456 78 90</p>
							</div>
						</div>
						<div className="flex  items-center mt-8 text-start border-b-2 border-teal-800 pb-5 ">
							<div className="size-12  rounded-full bg-gray-200 flex justify-center items-center me-4">
								<EnvelopeIcon className="size-6 text-teal-500" />
							</div>
							<div>
								<h4 className="text-sm text-gray-800"> Email Us </h4>
								<p className="text-gray-900 leading-7">hello@example.com</p>
							</div>
						</div>
					</div>
					<span className="mt-4 mb-4 block"> Follow us </span>
					<div className="flex items-center justify-center">
						<FaTwitter className="p-2 m-1 cursor-pointer bg-gray-200 rounded-full size-12 text-[#0084b4] " />
						<FaFacebook className="p-2 m-1 cursor-pointer bg-gray-200 rounded-full size-12 text-[#4267B2] " />
						<FaYoutube className="p-2 m-1 cursor-pointer bg-gray-200 rounded-full size-12 text-[#ff0000] " />
						<FaInstagram className="p-2 m-1 cursor-pointer bg-gray-200 rounded-full size-12 text-[#C13584] " />
						<FaLinkedin className="p-2 m-1 cursor-pointer bg-gray-200 rounded-full size-12 text-[#0072b1] " />
					</div>
				</div>
				<div className="w-full md:w-1/2  py-2 px-4 shadow-sm">
					<form
						onSubmit={(ev: React.FormEvent<HTMLFormElement>) => sendEmail(ev)}
					>
						<div className="mb-4">
							<label htmlFor="name" className="block font-bold mb-3">
								Name
							</label>
							<input
								id="name"
								type="text"
								required
								className="w-full block  input"
								placeholder="Enter Your Name"
								name="user_name"
								onChange={(ev) =>
									(form.current = {
										...form.current,
										user_name: ev.target.value,
									})
								}
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block font-bold mb-3">
								Email
							</label>
							<input
								id="email"
								type="email"
								required
								className="w-full block input"
								placeholder="Enter Your Email"
								name="user_email"
								onChange={(ev) =>
									(form.current = {
										...form.current,
										user_email: ev.target.value,
									})
								}
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="subject" className="block font-bold mb-3">
								Subject
							</label>
							<input
								id="subject"
								type="text"
								required
								className="w-full block input"
								placeholder="Enter Your Name"
								name="subject"
								onChange={(ev) =>
									(form.current = { ...form.current, subject: ev.target.value })
								}
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="block font-bold mb-3">
								Message
							</label>
							<textarea
								id="message"
								className="w-full h-[150px] textarea"
								name="message"
								onChange={(ev) =>
									(form.current = { ...form.current, message: ev.target.value })
								}
							/>
						</div>
						<button type="submit" className="w-[100px] py-3 button">
							{" "}
							Send{" "}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
