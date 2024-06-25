export type CouresViewType = {
	id: string;
	title: string;
	courseImage: string|null;
	instructor: {
		firstName: string;
		lastName: string;
		image: string|null;
	};
	rate: number;
	studentCount: number;
	price: {
		currency: string;
		value: string;
		updated: string | null;
	};
	level: string;
};