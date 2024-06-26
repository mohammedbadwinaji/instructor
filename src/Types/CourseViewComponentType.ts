export type CourseViewComponentType = {
	course: {
		id: string;
		title: string;
		subtitle: string;
		published: boolean;
		image: string | null;
	};
	className?: string;
};
