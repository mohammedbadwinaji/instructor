import { ChangeEvent, useRef } from "react";

export const useFormRefHook = (initialValue: {
	[key: string]: string | number | null | { [key: string]: string }[];
}) => {
	const info = useRef(initialValue);
	const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
		const name = ev.target.name;
		const value = ev.target.value;
		info.current = { ...info.current, [name]: value };
		console.log(info.current);
		ev.target.value = info.current[name] as string;
    
	};
	return { info, handleInput };
};
