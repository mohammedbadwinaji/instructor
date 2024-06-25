import { useState } from "react";

export const useListHook = (initialValue: { [key: string]: string }[]) => {
	const [list, setList] = useState<{ [key: string]: string }[]>(initialValue);

	const pushElement = (element: { [key: string]: string }) => {
		list.push(element);
		setList(list);
	};

	const removeElemennt = (index: number) => {
		list.splice(index, 1);
		setList(list);
	};
	const updateElement = (
		newElement: { [key: string]: string },
		index: number
	) => {
		list[index] = newElement;
		setList(list);
	};

	return { pushElement, removeElemennt, list, updateElement };
};
