import { ChangeEvent, useState } from "react";

export const useFormStateHook = (initialValue: {
	[key: string]:
		| ArrayBuffer
		| string
		| number
		| null
		| { [key: string]: string }[];
}) => {
	const [state, setState] = useState(initialValue);

	const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
		if (ev.target.type !== "file") {
			const {name,value} = ev.target;
      setState({ ...state, [name]: value });
		} else {
			const file = ev.target.files ? ev.target.files[0] : null;
			const reader = new FileReader();

			reader.addEventListener("load", () => {
				const name = ev.target.name;
				const value = reader.result;

				setState({ ...state, [name]: value });
			});

			if (file) {
				reader.readAsDataURL(file);
			}
		}
	};
	return { state, handleInput,setState };
};
