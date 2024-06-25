import { Link } from "react-router-dom";

import { ChangeEvent, FormEvent, useContext, useEffect, useRef } from "react";
import { router } from "../router";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
	const { token } = useContext(AuthContext);
	const credentails = useRef({});

	const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
	};
	const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = ev.target;
		credentails.current = { ...credentails.current, [name]: value };
		console.log(credentails.current);
	};

	useEffect(() => {
		if (token) {
			router.navigate("/instructor/");
		}
	});
	console.log("don't repeat your self");

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-5 mb-10  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Log In to your account
				</h2>

				<form className="space-y-6" onSubmit={handleSubmit}>
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
								required
								className="block w-full input"
								onChange={handleInput}
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="passwordConfirmation"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Password Confirmation
						</label>
						<div className="mt-2">
							<input
								id="passwordConfirmation"
								name="passwordConfirmation"
								type="password"
								required
								className="block w-full input"
								onChange={handleInput}
							/>
						</div>
					</div>

					<div>
						<button type="submit" className="w-full px-3 py-2 button mt-4">
							log in
						</button>
					</div>
				</form>
				<p className="mt-10  text-center text-sm text-gray-500">
					you are not a member ?
					<Link
						className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						replace={true}
						to={"/instructor/register"}
					>
						Sign Up For Free
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Login;
