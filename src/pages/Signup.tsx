import { ChangeEvent, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { AxiosResponse } from "axios";
import { AuthContext } from "../contexts/AuthContext";
import axiosClient from "../axios";
import { router } from "../router";

type singUpResponse = {
	user: {
		email: string;
		name: string;
		id: string;
	};
	token: string;
};
export default function Signup() {
	const { token } = useContext(AuthContext);
	const payload = useRef({});

	const { setUser, setToken } = useContext(AuthContext);

	const onSubmit: React.FormEventHandler<HTMLFormElement> = (
		ev: React.FormEvent<HTMLFormElement>
	) => {
		ev.preventDefault();
		axiosClient
			.post("/register", payload.current)
			.then((data: AxiosResponse<singUpResponse>) => {
				setUser({ firstName: "", lastName: "", email: "", id: "" });
				setToken(data.data.token);
			})
			.catch((err) => {
				const response = err.response;
				if (response && response.status === 422) {
					console.log(response.data.errors);
				}
			});
	};

	const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = ev.target;
		payload.current = { ...payload.current, [name]: value };
		console.log(payload.current);
	};
	useEffect(() => {
		if (token) {
			router.navigate("/instructor/");
		}
	});
	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			{/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
				</div> */}

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="-mt-5 mb-10  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign Up For Free
				</h2>

				<form
					onSubmit={(ev: React.FormEvent<HTMLFormElement>) => onSubmit(ev)}
					className="space-y-6"
				>
					<div>
						<label
							htmlFor="first-name"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							first Name
						</label>
						<div className="mt-2">
							<input
								onChange={handleInput}
								id="first-name"
								name="firstName"
								type="text"
								required
								className="block w-full input"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="last-name"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Last Name
						</label>
						<div className="mt-2">
							<input
								onChange={handleInput}
								id="last-name"
								name="lastName"
								type="text"
								required
								className="block w-full input"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="block w-full input"
								onChange={handleInput}
							/>
						</div>
					</div>
					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password
							</label>
							<div className="text-sm">
								<a
									href="#"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="block w-full input"
								onChange={handleInput}
							/>
						</div>
					</div>
					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password-confirmation"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password Confirmation
							</label>
						</div>
						<div className="mt-2">
							<input
								id="password-confirmation"
								name="password_confirmation"
								type="password"
								required
								className="block w-full input"
								onChange={handleInput}
							/>
						</div>
					</div>
					<div>
						<button type="submit" className="w-full px-3 py-2 button mt-4 ">
							Sign Up
						</button>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					you are a member?
					<Link
						className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						to={"/instructor/login"}
						replace={true}
					>
						lon in with existing account
					</Link>
				</p>
			</div>
		</div>
	);
}
